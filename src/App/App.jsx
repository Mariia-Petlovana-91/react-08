import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectAuthLoading } from "../redux/auth/selectors";
import { selectContactLoading } from '../redux/contacts/selectors';
import {apiGetUser} from "../redux/auth/slice";

const RestrictedRoute = lazy(() => import("../components/RestrictedRoute/RestrictedRoute"));
const PrivateRoute = lazy(() => import("../components/PrivateRoute/PrivateRoute"));
const Loader = lazy(() => import("../components/Loader/Loader"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

import Layout from "../components/Layout/Layout";

export default function App() {
  const dispatch = useDispatch();
  const isLoadUser = useSelector(selectAuthLoading);
  const isLoadContacts = useSelector(selectContactLoading);

  useEffect(() => {
    dispatch(apiGetUser());
    
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense>
          {isLoadContacts || isLoadUser? <Loader/> : null}
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
