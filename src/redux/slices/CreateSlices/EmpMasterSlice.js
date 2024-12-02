import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salesTeamMemberData: [],
  empLoading: false,
  EmpError: null,
};

const EmpMasterSlice = createSlice({
  name: "EmpMaster",
  initialState,
  reducers: {
    setEpmLoading: (state) => {
      state.empLoading = true;
    },
    setEmpError: (state, action) => {
      state.EmpError = action.payload;
      state.empLoading = false;
    },
    setSalesTeamMemberData: (state, action) => {
      state.salesTeamMemberData = action.payload;
      state.empLoading = false;
    },
  },
});

export const {
  setEpmLoading,
  setEmpError,

  setSalesTeamMemberData,
} = EmpMasterSlice.actions;
export default EmpMasterSlice.reducer;
