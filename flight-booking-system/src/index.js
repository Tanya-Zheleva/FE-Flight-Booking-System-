import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './pages/home';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import { SignInPage } from './pages/signIn';
import { RegisterPage } from './pages/register';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </BrowserRouter >
    </React.StrictMode>
);

reportWebVitals();