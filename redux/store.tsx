import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import errorReducer from './features/error';
import registerReducer from './features/register';
import corporateReducer from './features/corporateRegister';
import signinReducer from './features/signin';
import orderBookReducer from './features/orderBook';
import sessionReducer from './features/session';


const makeStore = () => configureStore({
    reducer: {
        error: errorReducer,
        register: registerReducer,
        signin: signinReducer,
        corporateRegister: corporateReducer,
        orderBook: orderBookReducer,
        session: sessionReducer,
    },
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);




// import { configureStore, createReducer, combineReducers } from '@reduxjs/toolkit';
// import { createWrapper } from 'next-redux-wrapper';
// import errorReducer from './features/error';
// import registerReducer from './features/register';
// import corporateReducer from './features/corporateRegister';
// import signinReducer from './features/signin';
// import orderBookReducer from './features/orderBook';


// // const makeStore = () => configureStore({
// //     reducer: {
// //         error: errorReducer,
// //         register: registerReducer,
// //         signin: signinReducer,
// //         corporateRegister: corporateReducer,
// //         orderBook: orderBookReducer
// //     },
// // });
// const combinedReducers = combineReducers({
//     error: errorReducer,
//     register: registerReducer,
//     signin: signinReducer,
//     corporateRegister: corporateReducer,
//     orderBook: orderBookReducer
// })

// const rootReducer = createReducer(combinedReducers(undefined, { type: "" }), (builder) => {
//     builder
//         .addCase("__NEXT_REDUX_WRAPPER_HYDRATE__", (state, action) => ({ ...state, ...action }))
//         .addDefaultCase(combinedReducers);
// });

// const initStore = () => {
//     const store = configureStore({
//         reducer: rootReducer,
//         middleware: getDefaultMiddleware =>
//             getDefaultMiddleware({
//                 serializableCheck: false,
//             }),
//     })
//     return store
// }

// export type AppStore = ReturnType<typeof initStore>;
// export type AppState = ReturnType<AppStore['getState']>;

// export const wrapper = createWrapper<AppStore>(initStore);