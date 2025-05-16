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

		dispatch(signup(JSON.stringify(values)));
		navigate("/blogs");
	};
	return (
		<>
				<div className="flex justify-center p-5">
				<Formik
				initialValues={initialValues}
				validationSchema={signUpValidationSchema}
				onSubmit={(values) => {
					handleSubmit(values);
				}}>
					 {({ isSubmitting }) => (
					  <Form className="w-1/2 flex justify-center">
						<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
							<div class="space-y-6" action="#">
								<h5 class="text-xl font-medium text-gray-900 dark:text-white ">Sign up to our platform</h5>
								<div>
									<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
									<Field name="name" type="string"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe"   />
									<ErrorMessage  className="flex text-red-400 text-left" name="name" component="span" />
								</div>
								<div>
									<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
									<Field name="email" type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"   />
									<ErrorMessage className="flex text-red-400 text-left" name="email" component="span" />
								</div>
								<div>
									<label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image:</label>
									<Field name="image" type="string"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="https://www.example.com"   />
									<ErrorMessage  className="flex text-red-400 text-left" name="name" component="span" />
								</div>
								<div>
									<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password: </label>
									<Field name="password" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••"   />
									<ErrorMessage name="password" className="flex text-red-400 text-left" component="span" />
								</div>
								<div>
									<label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password: </label>
									<Field name="password" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••"   />
									<ErrorMessage name="password"  className="flex text-red-400 text-left" component="span" />
								</div>
								<button type="submit" class="w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">sign up to your account</button>
								<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
									Already have account? <a href="/signup" class="text-blue-700 hover:underline dark:text-blue-500">Login</a>
								</div>
							</div>
						</div>
						</Form>
						)}
				  </Formik>
				</div>
		</>
	);
};

export default SignUp;
