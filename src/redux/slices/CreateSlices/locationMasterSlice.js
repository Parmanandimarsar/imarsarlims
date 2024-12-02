import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateData: [],
  districData: [],
  cityData: [],
  areaData: [],
  roleData: [],
  centerData: [],
  zoneData: [],
  departmentAcceData: [],
  rateTypeData:[],
  loading: false,
  error: null,
};

const locationMasterSlice = createSlice({
  name: "locationMaster",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setStateData: (state, action) => {
      state.stateData = action.payload;
      state.loading = false;
    },
    setDistricData: (state, action) => {
      state.districData = action.payload;
      state.loading = false;
    },
    setCityData: (state, action) => {
      state.cityData = action.payload;
      state.loading = false;
    },
    setAreaData: (state, action) => {
      state.areaData = action.payload;
      state.loading = false;
    },
    setRoleData: (state, action) => {
      state.roleData = action.payload;
      state.loading = false;
    },
    setCenterData: (state, action) => {
      state.centerData = action.payload;
      state.loading = false;
    },
    setZoneData: (state, action) => {
      state.zoneData = action.payload;
      state.loading = false;
    },
    setDepartmentAcceData: (state, action) => {
      state.departmentAcceData = action.payload;
      state.loading = false;
    },
    setRateTypeData: (state, action) => {
      state.rateTypeData = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setStateData,
  setDistricData,
  setCityData,
  setError,
  setAreaData,
  setRoleData,
  setCenterData,
  setZoneData,
  setDepartmentAcceData,
  setRateTypeData,
} = locationMasterSlice.actions;
export default locationMasterSlice.reducer;
