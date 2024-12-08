
import { Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Link } from "react-router-dom";
import * as Yup from 'yup';


const RegistrationForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, options) => {
        dispatch(register(values));
        options.resetForm();
    };

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
        <Field className={css.input} type='text' name='name' />    
    </label>
    <label className={css.label}>
        Email
        <Field className={css.input} type='email' name='email' />    
    </label>
    <label className={css.label}>
        Password
        <Field className={css.input} type='password' name='password' />    
    </label>
    <button type='submit' className={css.regBtn}>
        Register
    </button>
    <p className={css.text}>
        Do you already have an account?<Link to='/login'></Link>
        </p>
</Form>
    </Formik>
  );
};

export default RegistrationForm;