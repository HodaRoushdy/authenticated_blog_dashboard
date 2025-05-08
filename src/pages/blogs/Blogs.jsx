import { useQuery } from "@tanstack/react-query";
import errorAnimation from "../../../public/error.json";
import loadingAnimation from "../../../public/loading.json";
import styles from "./blogs.module.css";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../components/pagination/Pagination";

export const fetchBlogs = async () => {
  try {
    const blogs = await fetch("https://jsonplaceholder.typicode.com/posts");
    return blogs.json();
  } catch (error) {
    throw Error("can not reach the resource", error);
  }
};

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let postsPerPage = 10;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const { data, isPending, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: import.meta.env.VITE_STALE_TIME,
  });

  const currentPosts =
    !isPending && data.length && data.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={styles.blogsContainer}>
      <div className={styles.header}>
        <h2>Explore Blogs</h2>
        <Link to={"/blogs/add-blog"}>Create your own blog</Link>
      </div>
      {isError ? (
        <Lottie animationData={errorAnimation} loop={true} />
      ) : !isPending ? (
        currentPosts.map((blog) => (
          <div className={styles.blogCard} key={blog.id}>
            <div className={styles.userIdSec}>
              <p>{blog.userId}</p>
            </div>
            <div className={styles.titleSec}>
              <h3>{blog.title}</h3>
            </div>
            <div className={styles.bodySec}>
              <span>{blog.body}</span>
            </div>
          </div>
        ))
      ) : (
        <Lottie animationData={loadingAnimation} loop={true} />
      )}
      {data && (
        <div>
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default Blogs;
