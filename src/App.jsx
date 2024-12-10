import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';

import Loader from './components/Loader/Loader';
import Layout from './components/Layout';

import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';

import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));


function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() =>{
    dispatch(refreshUser())
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </Layout>
  );
};

export default App;
