import css from '../App/App.module.css';

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Toaster } from 'react-hot-toast';

const Navigation = lazy(() => import("../components/Navigation/Navigation"));
const Section = lazy(() => import("../components/Section/Section"));
const Loader = lazy(() => import("../components/Loader/Loader"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const  RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));



export default function App() {

  return (
    <>
      <header className={css.header}></header>
      <Section>
        <Suspense>
          <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/contacts" element={<ContactsPage/>} />
           <Route path="/register" element={<RegistrationPage />}/>
           <Route path="/login" element={<LoginPage/>}/>
  	       <Route path="*" element={<NotFoundPage />} />
         </Routes>
        </Suspense>
      </Section>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
        duration: 3000,
        style: {
          background: ' #f04980d8',
          color: '#fff',
          border:  '1px solid rgb(168, 34, 67)'
        },
      }}       
    /> 
    </>
  )
}
