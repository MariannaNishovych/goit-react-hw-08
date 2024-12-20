import { Field, Form, Formik } from "formik";
import css from './LoginForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';
import { selectIsLogged } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";



const LoginForm = () => {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(selectIsLogged);

    const initialValues = {
        email: '',
        password: '',
    }

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
    actions.resetForm();
    };

    if (isLoggedIn) {
        return <Navigate to="/" />;
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