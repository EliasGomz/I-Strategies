import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [""],
    isLogin: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { loginUser, setIsLogin } = userSlice.actions;
export default userSlice.reducer;
