import { configureStore } from '@reduxjs/toolkit';
import locationMasterReducer from "./slices/CreateSlices/locationMasterSlice"
import empMasterReducer from "./slices/CreateSlices/EmpMasterSlice"
// Configure the Redux store
const store = configureStore({
  reducer: {
   // Add more reducers here as needed
   locationMaster: locationMasterReducer,
   empMaster:empMasterReducer
  },
});

export default store;
