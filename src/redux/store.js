import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'; // Example slice
import locationMasterReducer from "./slices/locationMasterSlice"
// Configure the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more reducers here as needed
   locationMaster: locationMasterReducer,
  },
});

export default store;
