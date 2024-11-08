import css from '../App/App.module.css';

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Toaster } from 'react-hot-toast';

//  import Navigation from "../components/Navigation/Navigation";
 import Section from "../components/Section/Section";
 import Loader  from "../components/Loader/Loader";
 import HomePage from "../pages/HomePage/HomePage";
 import LoginPage from "../pages/LoginPage/LoginPage";
 import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
 import ContactsPage from "../pages/ContactsPage/ContactsPage";
 import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


export default function App() {
  return (
    <>
      <header className={css.header}></header>
      <Section>
        <Suspense > {/* Додано fallback */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage/>} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
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
            border: '1px solid rgb(168, 34, 67)'
          },
        }}
      /> 
    </>
  );
}