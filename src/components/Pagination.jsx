
const Pagination = ({postsPerPage,totalPosts,setCurrentPage})=>{
    console.log(Math.ceil(totalPosts / postsPerPage),"testtt")   
     let pages =[];
    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pages.push(i)
    }
    return(
        <div>
            {pages.map((page,idx)=>(
                <button key={idx} onClick={()=> setCurrentPage(page)}>{page}</button>
            ))}
        </div>
    )
}
export default Pagination