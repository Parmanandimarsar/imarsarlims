import {
    setLoading,
    setError,
    setSalesTeamMemberData
  } from "../CreateSlices/EmpMasterSlice";
  import { postData, getData } from "../../../Api/apiServices";
  
  // Fetch State Data
  export const fetchSalesTeamMemberData = (values) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await getData(
        "empMaster?select=id,fName&$filter=(isActive eq true and isSalesTeamMember eq 1)",
        values
      );
      dispatch(setSalesTeamMemberData(response)); // State data ko set karo
    } catch (error) {
      dispatch(setError(error.message)); // Error handle karo
    }
  };
 