import { createSlice } from "@reduxjs/toolkit"
import {createAsyncThunk} from '@reduxjs/toolkit'
import {API} from '../../api'
const initialState = {
    userData: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
}
//login
export const login = createAsyncThunk('login',async (params, thunkApi) =>{
    console.log('login function')
    console.log('file: AuthSlice.js:13 - login - params:', params)
    try{
        const response =   await API.post('auth/login', params);
        console.log(response)
        return response.data
    }
    catch(error){
        console.log('login function: Error')
        return thunkApi.rejectWithValue(error)
    }
})
const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        //login cases
        builder.addCase(login.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.userData = action.payload;
        })
        builder.addCase(login.rejected, (state)=>{
            state.isLoading = false;
            state.isError = true;
        })
    },
})

export default AuthSlice.reducer;