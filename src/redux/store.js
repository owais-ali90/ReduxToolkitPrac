import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import AuthSlice from './features/AuthSlice'
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {persistReducer, persistStore, middleware} from 'redux-persist'
// import productsSlice from './redux/features/ProductSlice'
const reducers = combineReducers({
    counter: counterSlice,
    auth: AuthSlice,
    // products: productsSlice
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'counter']
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>(
        getDefaultMiddleware({serializableCheck: false})
    )
});

const persistor = persistStore(store)
export {store, persistor}
// export default store; // Ensure default export

// const store = configureStore({
//     reducer:{
//         counter: counterSlice,
//         auth: AuthSlice
//     }
// })
