import React from 'react'
import {Provider} from 'react-redux'
import {store}  from './src/redux/store'
import AppNavigation from './src/routes/AppNavigation'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation/>
        </PersistGate>
    </Provider>
  )
}