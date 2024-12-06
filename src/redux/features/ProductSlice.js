
import { createSlice } from "@reduxjs/toolkit"
import {createAsyncThunk} from '@reduxjs/toolkit'
import {API} from '../../api'

const initialState = {
    products: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
}
//All Products
export const getAllProducts = createAsyncThunk('getAllProducts',async thunkApi =>{
    try{
        const response =   await API.get('products');
        console.log(response?'product data came successfully':'something went wrong during fetching products data')
        return response.data
    }
    catch(error){
        console.log('Error in fetching products data')
        return thunkApi.rejectWithValue(error)
    }
})

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProducts.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;
        })
        builder.addCase(getAllProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
        })
    },
})
export default ProductSlice.reducer;