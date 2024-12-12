
import { Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import toast from 'react-hot-toast';


const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, options) => {
        dispatch(register(values));
        options.resetForm();
    };

    // const handleSubmit = (values, options) => {
    //     dispatch(register(values))
    //     .unwrap()
    //     .then(() => {
    //         toast.success("Registration successful!");
    
    //         navigate("/contacts");
    //     })
    //     .catch(() => {
    //         toast.error("Registration failed. Please try again.");
    //     });
    //     options.resetForm();
    // };

    const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Enter a real name!")
        .max(50, "Too Long!")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .min(3, "Enter a real email!")
        .max(50, "Too Long!")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Enter a real password!")
        .max(50, "Too long")
        .required("Password is required"),
    })

return (
    <Formik initialValues={initialValues} 
    onSubmit={handleSubmit}
    validationSchema={validationSchema}>
<Form className={css.form}>
    <label className={css.label}>
        Username
        <Field className={css.input} type='text' name='name' placeholder='Enter your name' />    
    </label>
    <label className={css.label}>
        Email
        <Field className={css.input} type='email' name='email' placeholder='Enter your email' />    
    </label>
    <label className={css.label}>
        Password
        <Field className={css.input} type='password' name='password' placeholder='Enter your password' />    
    </label>
    <button type='submit' className={css.regBtn}>
        Register
    </button>
</Form>
    </Formik>
);
};

export default RegistrationForm;