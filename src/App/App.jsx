import css from '../App/App.module.css';

import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectLoading } from "../redux/auth/selectors";
import apiModule from "../redux/auth/slice";



import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Layout from '../components/Layout/Layout';
import Loader from "../components/Loader/Loader";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export default function App() {
  const dispatch = useDispatch();
  const isLoad = useSelector(selectLoading);

  useEffect(() => {
    dispatch(apiModule.apiGetUser());
    
  }, [dispatch]);

  return (
    <>
      <Layout>
        {isLoad&&<Loader/>}
        
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route 
              path="/contacts" 
              element={
                <PrivateRoute component={<ContactsPage />}/>
              } 
            />

            <Route 
              path="/register" 
              element={
                <RestrictedRoute component={ <RegistrationPage />}/>
              } 
            />

            <Route 
              path="/login" 
              element={
                <RestrictedRoute component={ <LoginPage />}/>
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: ' #f04980d8',
            color: '#fff',
            border: '1px solid rgb(168, 34, 67)'
          },
        }}
      />
    </>
  );
}
