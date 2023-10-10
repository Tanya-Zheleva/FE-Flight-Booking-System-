import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './pages/home';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import { SignInPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { ProfilePage } from './pages/profile';
import { ErrorPage } from './pages/error';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<SignInPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>
);

reportWebVitals();