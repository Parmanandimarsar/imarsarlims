import {
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
  setRateTypeData
} from "../CreateSlices/locationMasterSlice";
import { postData, getData } from "../../../Api/apiServices";

// Fetch State Data
export const fetchStateData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "stateMaster?select=id,state&$filter=(isActive eq true)",
      values
    );
    dispatch(setStateData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
export const fetchDistricData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "districtMaster?select=id,district&$filter=(isActive eq true)",
      values
    );
    dispatch(setDistricData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
// Fetch City Data
export const fetchCityData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData("cityMaster", values);
    dispatch(setCityData(response)); // City data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};

export const fetchAreaData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "area_master?select=id,areaName&$filter=(cityId eq 1)",
      values
    );
    dispatch(setAreaData(response)); // City data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
export const fetchRoleData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "roleMaster?select=id,roleName&$filter=(isActive eq true)",
      values
    );
    dispatch(setRoleData(response)); // City data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
export const fetchCenterData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "centreMaster?select=id,companyName&$filter=(isActive eq true)",
      values
    );
    dispatch(setCenterData(response)); // City data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
export const fetchZoneData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "zoneMaster?select=id,zone&$filter=(isActive eq true)",
      values
    );
    dispatch(setZoneData(response)); // City data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};

export const fetchDepartmentAcceData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "labDepartment?select=id,subDeptName",
      values
    );
    dispatch(setDepartmentAcceData(response)); // City data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
export const fetchRateType = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "rateTypeMaster",
      values
    );
    dispatch(setRateTypeData(response)); // City data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
