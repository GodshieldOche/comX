import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'








export const storeSession: any = createAsyncThunk(
    `user/storeSession`, async ({ token, stay }: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.post(`/api/auth/session`, { token, stay }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return data

        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)



export const getSession: any = createAsyncThunk(
    `user/getSession`, async (obj: any, { dispatch, rejectWithValue }) => {

        try {
            const { data }: any = await axios.get(`/api/auth/user`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return data

        } catch (error: any) {
            return rejectWithValue(error.message)
        }

    }
)


// Define a type for the slice state
interface sessionState {
    loading: boolean;
    data: string;
    message: string;
    error: string;
}

// Define the initial state using that type
const initialState: sessionState = {
    loading: false,
    data: '',
    message: '',
    error: '',

}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {

    },
    extraReducers: {
        [storeSession.pending]: (state) => {
            state.loading = true
        },
        [storeSession.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [storeSession.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getSession.pending]: (state) => {
            state.loading = true
        },
        [getSession.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.data = payload.token
        },
        [getSession.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// // Other code such as selectors can use the imported `RootState` type

// export const otpEmail = (state: AppState) => state.session.email

export default sessionSlice.reducer