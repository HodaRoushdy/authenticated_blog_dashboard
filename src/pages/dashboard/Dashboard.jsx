import { useMutation, useQuery } from '@tanstack/react-query';
import styles from './dashboard.module.css';
import { fetchBlogs } from '../blogs/Blogs';


const handleDelete = async (id)=>{
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'DELETE',
        })
        return res
    } catch (error) {
        throw new Error ('error while deleting post',error)
    }
}

const Dashboard = ()=>{
    
    const {mutate,isError,error} = useMutation({
        mutationFn: (id) => {
            return handleDelete(id)
        },
        onSuccess:()=>{
            console.log("deleted successfully")
        }
    });

    isError && console.log("error while deleting",error)

    const onSubmit = (id) => {
        // event.preventDefault()
        mutate(id)
    }

       const {data} = useQuery({
        queryKey:['blogs'],
        queryFn: fetchBlogs,
        staleTime: 10000
       })
    console.log(data)
    const sample = data && data.slice(0,10)

    return(
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardHeader}>
                <img src="./person-man.webp" alt="" />
                <div>
                    <h3>{JSON.parse(localStorage.getItem('token')).email}</h3>
                    <p>{JSON.parse(localStorage.getItem('token')).id}</p>
                </div>
            </div>
            <h2>Posts:</h2>
                <div className={styles.postsSec}>
            
            {data && sample.map((post) => (
            <div className={styles.postCard}>
            <div className={styles.postHeader}>
                <h4>{ post.title}</h4>
            </div>
                    <p>{ post.body}</p>
            <button onClick={()=> onSubmit(post.id)}>Delete</button>
        </div>
            
            ))}
            </div>
                
            


        </div>
    )
}

export default Dashboard