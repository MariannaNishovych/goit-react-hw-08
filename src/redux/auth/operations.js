import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
  });


const setAuthHeader = (token) => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    goitApi.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async(credentials, thunkAPI) => {
try {
    const response = await goitApi.post('/users/signup', credentials);
    setAuthHeader(response.data.token);
    return response.data;
} catch (error) {
return thunkAPI.rejectWithValue(error.message);
}
});

export const logIn = createAsyncThunk('auth/login', async(credentials, thunkAPI) => {
    try {
        const response = await goitApi.post('/users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    }
    });

    export const logOut  = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
        try {
            await goitApi.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
        });

    export const refreshUser  = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
            const state = thunkAPI.getState();
            const persistedToken = state.auth.token;
            
            if (persistedToken === null) {
                return thunkAPI.rejectWithValue('Unable to fetch user');
            }
        
        try {
            setAuthHeader(persistedToken);
            const response = await goitApi.get('/users/current');
            return response.data;
            } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            }
            });

