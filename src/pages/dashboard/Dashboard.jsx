import { useMutation } from '@tanstack/react-query';
import styles from './dashboard.module.css';

const handleDelete = async (id)=>{
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'DELETE',
          })
        return res
    } catch (error) {
        throw new Error ('error while deleting post')
    }
}

const Dashboard = ()=>{
    
    const {mutate,data,isError} = useMutation({
        mutationFn: (id) => {
          return handleDelete(id)
        },
        onSuccess:()=>{
          console.log(data,"data from deleting")
        }
      });
      
    const onSubmit = (event,id) => {
        event.preventDefault()
        mutate(id)
      }

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
            
            {[...Array(10)].map((e, i) => 
            <div className={styles.postCard}>
            <div className={styles.postHeader}>
                <h4>title</h4>
            </div>
            <p>body of blog</p>
            <button onClick={(e,id)=> onSubmit(e,id)}>Delete</button>
        </div>
            
            )}
           </div>
            


        </div>
    )
}

export default Dashboard