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
import Consumer from './pages/dashboard/Consumer';
import Donation from './pages/dashboard/Donation';
import Analytics from './pages/dashboard/Analytics';
import DonarList from './pages/admin/DonarList';
import HospitalList from './pages/admin/HospitalList';
import OrgList from './pages/admin/OrgList';
import AdminHome from './pages/admin/AdminHome';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>
        } />

        <Route path="/donar-list" element={
          <ProtectedRoute>
            <DonarList />
          </ProtectedRoute>
        } />
        <Route path="/hospital-list" element={
          <ProtectedRoute>
            <HospitalList />
          </ProtectedRoute>
        } />
        <Route path="/org-list" element={
          <ProtectedRoute>
            <OrgList />
          </ProtectedRoute>
        } />

        <Route path="/consumer" element={
          <ProtectedRoute>
            <Consumer />
          </ProtectedRoute>
        } />

        <Route path="/analytics" element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />

        <Route path="/donation" element={
          <ProtectedRoute>
            <Donation />
          </ProtectedRoute>
        } />

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
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
