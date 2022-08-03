import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import axios from 'axios'
import { manager } from './register'
import { storeSession } from './session'





export const postSignIn: any = createAsyncThunk(
    `user/postSignIn`, async ({formData} : any, { dispatch, rejectWithValue }) => {

        await manager.encrypt(formData)

        try {
            const { data }: any = await axios.post(`https://comx-sand-api.afexnigeria.com/api/login`, JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await manager.decrypt(data)

            // if (data?.data?.token) {
            //     dispatch(storeSession({ token: data.data.token, stay }))
            // }

            
            return data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)

export const passwordResetRequest: any = createAsyncThunk(
    `user/passwordResetRequest`, async ( email: string, { dispatch, rejectWithValue }) => {
        let formData = { email }
        await manager.encrypt(formData)

        try {
            const { data }: any = await axios.post(`https://comx-sand-api.afexnigeria.com/api/password-reset-request`, JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await manager.decrypt(data)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)


export const resetOtpValidate: any = createAsyncThunk(
    `user/resetOtpValidate`, async (data: { email: string;  otp: string}, { dispatch, rejectWithValue }) => {
        let formData = { email: data.email, otp: data.otp }
        await manager.encrypt(formData)

        try {
            const { data }: any = await axios.post(`https://comx-sand-api.afexnigeria.com/api/password-reset-otp-validation`, JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await manager.decrypt(data)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)



// Define a type for the slice state
interface signinState {
    loading: boolean;
    data: object;
    error: string;
    message: string;
}

// Define the initial state using that type
const initialState: signinState = {
    loading: false,
    data: {},
    message: '',
    error: '',

}

export const signInSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [postSignIn.pending]: (state) => {
            state.loading = true
        },
        [postSignIn.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.data
        },
        [postSignIn.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [passwordResetRequest.pending]: (state) => {
            state.loading = true
        },
        [passwordResetRequest.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [passwordResetRequest.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [resetOtpValidate.pending]: (state) => {
            state.loading = true
        },
        [resetOtpValidate.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [resetOtpValidate.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type

// export const otpEmail = (state: AppState) => state.signin.email

export default signInSlice.reducer