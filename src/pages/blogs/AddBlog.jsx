import { ErrorMessage, Field, Formik } from "formik";
import { blogValidationSchema } from "../../utils/validation";
import { Form } from "react-router-dom";

const AddBlog = () =>{
    const initialValues = {
        userId: 0,
        title:'',
        body:''
    }
    const handleSubmit= (values)=>{

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
                      <label htmlFor="userId">Your Id:</label>
                      <Field name="userId" type="number" />
                      <ErrorMessage name="userId" component="span" />
                    </div>
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
                    <button type="submit" disabled={isSubmitting}>
                      Post
                    </button>
                  </Form>
                )}
              </Formik>
        
        </>
    )
}

export default AddBlog