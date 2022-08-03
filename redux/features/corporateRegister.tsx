import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import axios from 'axios'
import { data } from '../../components/Auth/Register/FormWrapper'
import { manager } from './register'
import { storeSession } from './session'





export const postCorporateRegister: any = createAsyncThunk(
    `user/postCorporateRegister`, async (formData: data, { dispatch, rejectWithValue }) => {

        await manager.encrypt(formData)

        try {
            const { data }: any = await axios.post(`https://comx-sand-api.afexnigeria.com/api/corporate-client-register`, JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await manager.decrypt(data)

            
            if (data?.data?.token) {
                dispatch(storeSession({ token: data.data.token, stay: false }))
            }

            return data
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)


// Define a type for the slice state
interface registerState {
    loading: boolean;
    data: object;
    error: string;

}

// Define the initial state using that type
const initialState: registerState = {
    loading: false,
    data: {},
    error: ''

}

export const corporateRegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [postCorporateRegister.pending]: (state) => {
            state.loading = true
        },
        [postCorporateRegister.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.data
        },
        [postCorporateRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type



export default corporateRegisterSlice.reducer