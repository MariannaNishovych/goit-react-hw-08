import { Field, Form, Formik } from "formik";
import css from './LoginForm.module.css';
import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';



const LoginForm = () => {

    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    }

    const handleSubmit = (values, options) => {
        dispatch(logIn(values));
        options.resetForm();
    }
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email('Invalid email')
        .min(8, 'Too Short!')
        .max(30, 'Too Long')
        .required('Email is required'),
        password: Yup.string()
        .min(6, 'Too Short!')
        .max(30, 'Too Long')
        .required('Password is required'),
    })

  return (
    <Formik onSubmit={handleSubmit} 
    initialValues={initialValues} 
    validationSchema={validationSchema}>
        <Form className={css.form}>
            <label className={css.label}>
                Email
            <Field type='email' name='email' placeholder='Enter your email' className={css.input} />
            </label>
            <label className={css.label}>
                Password
            <Field type='password' name='password' placeholder='Enter your password' className={css.input} />
            </label>
            <button type='submit' className={css.logBtn}>
                Log in
            </button>
        </Form> 
    </Formik>
)
}

export default LoginForm;