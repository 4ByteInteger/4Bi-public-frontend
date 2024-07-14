import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../../network/constants";

const applyNowSlice = createSlice({
  name: "applyNow",
  initialState: {
    isModalOpen: false,
    api: {
      enrollmentStatus: ApiStatus.init,
      errorMessage: "",
    },
  },
  reducers: {
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    updateEnrollmentStatus: (state, action) => {
      const { status, message } = action.payload;
      state.api.enrollmentStatus = status;
      if (status === ApiStatus.success) {
        state.isModalOpen = false;
      }
      if (status === ApiStatus.error) {
        state.api.errorMessage = message;
      }
    },
    resetEnrollModalState: (state) => {
      state.api.enrollmentStatus = ApiStatus.init;
      state.api.errorMessage = "";
    },
  },
});

export const {
  openModal,
  closeModal,
  updateEnrollmentStatus,
  resetEnrollModalState,
} = applyNowSlice.actions;

export default applyNowSlice;
