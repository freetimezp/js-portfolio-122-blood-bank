import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Donar from './pages/dashboard/Donar';

import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Hospitals from './pages/dashboard/Hospitals';
import Organization from './pages/dashboard/Organization';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/donar" element={
          <ProtectedRoute>
            <Donar />
          </ProtectedRoute>
        } />

        <Route path="/hospital" element={
          <ProtectedRoute>
            <Hospitals />
          </ProtectedRoute>
        } />

        <Route path="/organization" element={
          <ProtectedRoute>
            <Organization />
          </ProtectedRoute>
        } />

        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />

        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path="/register" element={
          <Register />
        } />
      </Routes>
    </>
  );
}

export default App;
