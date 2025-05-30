import { createSlice } from '@reduxjs/toolkit';

const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    template: 'modern',
    data: {
      name: '',
      email: '',
      phone: '',
      summary: '',
      experience: [],
      education: [],
      skills: []
    }
  },
  reducers: {
    updateResumeData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    updateTemplate: (state, action) => {
      state.template = action.payload;
    }
  }
});

export const { updateResumeData, updateTemplate } = resumeSlice.actions;
export default resumeSlice.reducer;