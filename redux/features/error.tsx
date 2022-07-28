import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'

// Define a type for the slice state
interface errorSlice {
    message: string;
    state: boolean;
    type: string;
    pos: string;
}

// Define the initial state using that type
const initialState: errorSlice = {
    message: '',
    state: false,
    type: '',
    pos: '',
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setModalState: (state, {payload}) => {
            state.state = payload
        },
        setModalType: (state, {payload}) => {
            state.type = payload
        },
        setModalMessage: (state, {payload}) => {
            state.message = payload
        },
    },
})

export const errorState = (state: AppState) => state.error.state
export const errorType = (state: AppState) => state.error.type
export const errorMessage = (state: AppState) => state.error.message
export const errorPos = (state: AppState) => state.error.pos

export const { setModalState, setModalType, setModalMessage } = errorSlice.actions

export default errorSlice.reducer