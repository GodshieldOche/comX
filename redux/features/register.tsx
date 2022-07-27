import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import axios from 'axios'
import { data } from '../../components/Auth/Register/FormWrapper'
import Manager from '../../lib/encryption'

export const manager = new Manager({
    key: process.env.NEXT_PUBLIC_KEY,
    vector: process.env.NEXT_PUBLIC_VECTOR
});



export const postRegister: any = createAsyncThunk(
    `user/postRegister`, async (formData: any, { dispatch, rejectWithValue }) => {

        await manager.encrypt(formData)

        try {
            const { data } : any = await axios.post(`https://comx-sand-api.afexnigeria.com/api/register`, JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await manager.decrypt(data)
            dispatch(setSession(data))
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error)
        }

    }
)


export const postOTP: any = createAsyncThunk(
    `user/postOTP`, async ({otp, token} : any, { rejectWithValue }) => {
        const form_data = {otp}
        await manager.encrypt(form_data)

        try {
            const { data }: any = await axios.post(`https://comx-sand-api.afexnigeria.com/api/otp/validate`, JSON.stringify(form_data), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            await manager.decrypt(data)
            return data
        } catch (error) {
            console.log(rejectWithValue(error))

            return rejectWithValue(error)
        }

    }
)

// Define a type for the slice state
interface registerState {
    loading: boolean;
    data: object;
    error: string;
    message: string;

}

// Define the initial state using that type
const initialState: registerState = {
    loading: false,
    data: {},
    message: '',
    error: ''

}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setSession: (state, { payload }) => {
            if (typeof window !== "undefined") {
                payload?.data?.token ? sessionStorage.setItem("data", JSON.stringify(payload.data.token))
                    : sessionStorage.removeItem("data")
            }
        },
    },
    extraReducers: {
        [postRegister.pending]: (state) => {
            state.loading = true
        },
        [postRegister.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.data
        },
        [postRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [postOTP.pending]: (state) => {
            state.loading = true
        },
        [postOTP.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postOTP.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type
export const userData = (state: AppState) => state.register.data


export const { setSession } = registerSlice.actions

export default registerSlice.reducer