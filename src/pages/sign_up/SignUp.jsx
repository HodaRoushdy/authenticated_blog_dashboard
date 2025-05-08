import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpValidationSchema } from "../../utils/validation";
import { useDispatch } from "react-redux";
import { signup } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const initialValues = {
		name: "",
		email: "",
		image: "",
		password: "",
		confirmPassword: "",
	};
	const handleSubmit = (values) => {
		console.log(values);
		dispatch(signup(JSON.stringify(values)));
		navigate("/blogs");
	};
	return (
		<>
			<h1>Be a new member</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={signUpValidationSchema}
				onSubmit={(values) => {
					handleSubmit(values);
				}}>
				{({ isSubmitting }) => (
					<Form className="my_form">
						<div className="input_group">
							<label htmlFor="name">Name:</label>
							<Field
								name="name"
								type="string"
							/>
							<ErrorMessage
								name="name"
								component="span"
							/>
						</div>
						<div className="input_group">
							<label htmlFor="email">Email:</label>
							<Field
								name="email"
								type="email"
							/>
							<ErrorMessage
								name="email"
								component="span"
							/>
						</div>
						<div className="input_group">
							<label htmlFor="image">Image:</label>
							<Field
								name="image"
								type="string"
							/>
							<ErrorMessage
								name="image"
								component="span"
							/>
						</div>
						<div className="input_group">
							<label htmlFor="password">Password:</label>
							<Field
								name="password"
								type="password"
							/>
							<ErrorMessage
								name="password"
								component="span"
							/>
						</div>
						<div className="input_group">
							<label htmlFor="confirmPassword">Confirm Password:</label>
							<Field
								name="confirmPassword"
								type="password"
							/>
							<ErrorMessage
								name="confirmPassword"
								component="span"
							/>
						</div>
						<button
							type="submit"
							disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default SignUp;
