import { ErrorMessage, Field, Form, Formik } from "formik";
import { blogValidationSchema } from "../../utils/validation";
import {  useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchBlogs } from "./Blogs";

const AddBlog = () =>{
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const initialValues = {
    title:'',
    body:''
  }

  const createNewPost = async (values) =>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          userId: JSON.parse(localStorage.getItem('token')).id,
          ...values
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      return res
      
    } catch (error) {
      throw new Error('error while creating new blog...')
    }
  }

  const {mutate,isError, isPending, error, data} = useMutation({
    mutationFn: (values)=> {return createNewPost(values)},
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['blogs']})
      // navigate('/blogs')
      // navigate('/')
    }
  })

  const test = useQuery({
          queryKey:['blogs'],
          queryFn: fetchBlogs,
          staleTime: 10000
      })
      console.log(test.data,"dataaaa")
    isError && console.log(error)

    const handleSubmit = (values)=>{
      mutate(values);
    }
    return(
        <>
        <h2>Create your blog</h2>
          <Formik
                initialValues={initialValues}
                validationSchema={blogValidationSchema}
                onSubmit={(values) => {                  
                  handleSubmit(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className='my_form'>
                    <div className='input_group'>
                      <label htmlFor="title">Title:</label>
                      <Field name="title" type="string" />
                      <ErrorMessage name="title" component="span" />
                    </div>
                    <div className='input_group'>
                      <label htmlFor="body">Body:</label>
                      <Field name="body" type="string" />
                      <ErrorMessage name="body" component="span" />
                    </div>
                    <button type="submit" disabled={isPending}>
                      Post
                    </button>
                  </Form>
                )}
              </Formik>
        
        </>
    )
}

export default AddBlog