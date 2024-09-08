import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ role, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post("/auth/login", { role, email, password });

            //store token
            if (data.success) {
                localStorage.setItem("token", data.token);
                toast.success(data.message);
            }

            return data;

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const userRegister = createAsyncThunk(
    'auth/register',
    async ({
        email,
        password,
        name,
        role,
        organizationName,
        hospitalName,
        website,
        address,
        phone
    }, { rejectWithValue }) => {
        try {
            const { data } = await API.post("/auth/register", {
                email,
                password,
                name,
                role,
                organizationName,
                hospitalName,
                website,
                address,
                phone
            });

            //store token
            if (data?.success) {
                toast.success("User registered successfully.");
                window.location.replace("/login");
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

















