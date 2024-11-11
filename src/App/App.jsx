import css from '../App/App.module.css';

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Toaster } from 'react-hot-toast';

import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Layout from '../components/Layout/Layout';
import Loader from "../components/Loader/Loader";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const isAuthenticated = false;

export default function App() {
  return (
    <>
      <Layout isLogIn={isAuthenticated}>
        {/* {isAuthenticated&&<Loader/>} */}
        
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route 
              path="/contacts" 
              element={
                <PrivateRoute isLogIn={isAuthenticated}>
                  <ContactsPage />
                </PrivateRoute>
              } 
            />

            <Route 
              path="/register" 
              element={
                <RestrictedRoute isLogIn={isAuthenticated}>
                  <RegistrationPage />
                </RestrictedRoute>
              } 
            />

            <Route 
              path="/login" 
              element={
                <RestrictedRoute isLogIn={isAuthenticated}>
                  <LoginPage />
                </RestrictedRoute>
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
