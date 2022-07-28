import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'
import { manager } from './register'





export const getProductView: any = createAsyncThunk(
    `user/getProductView`, async (req : any, { dispatch, rejectWithValue }) => {
        
        const { origin } = absoluteUrl(req)
        // await manager.encrypt(formData)

        try {
            const { data }: any = await axios.get(`https://comx-sand-api.afexnigeria.com/api/securities/boards`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNzc5MSwidXNlcm5hbWUiOiJjb2RleHhkZXZAZ21haWwuY29tIiwiZXhwIjoxNjU5MDk0NTQzLCJlbWFpbCI6ImNvZGV4eGRldkBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY1OTAwODE0M30.lFRCczcvUFYm5eL_xQEZV_te6BrqHj6NIYrKME64_vU`
                }
            })
            data.data.forEach((item: any) => { 
                manager.decrypt(item)
            })
            
            // dispatch(setSession(data))
            return data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)


export const getProductPrice: any = createAsyncThunk(
    `user/getProductPrice`, async (token, { dispatch, rejectWithValue }) => {

        // const { origin } = absoluteUrl(req)
        // await manager.encrypt(formData)

        try {
            const { data }: any = await axios.get(`https://comx-sand-api.afexnigeria.com/api/security-price/live`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            data.data.forEach((item: any) => {
                manager.decrypt(item)
            })

            // dispatch(setSession(data))
            return data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)



// Define a type for the slice state
interface orderBookState {
    loading: boolean;
    data: [];
    price: [];
    error: string;

}

// Define the initial state using that type
const initialState: orderBookState = {
    loading: false,
    data: [],
    price: [],
    error: ''

}

export const orderBookSlice = createSlice({
    name: 'orderBook',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getProductView.pending]: (state) => {
            state.loading = true
        },
        [getProductView.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.data
        },
        [getProductView.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getProductPrice.pending]: (state) => {
            state.loading = true
        },
        [getProductPrice.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.price = payload.data
        },
        [getProductPrice.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type


// export const { setSession } = orderBookSlice.actions

export default orderBookSlice.reducer