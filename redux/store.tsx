import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import errorReducer from './features/error';
import registerReducer from './features/register';
import corporateReducer from './features/corporateRegister';


const makeStore = () => configureStore({
    reducer: {
        error: errorReducer,
        register: registerReducer,
        corporateRegister: corporateReducer,
    },
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);