import { createSlice } from "@reduxjs/toolkit";
const initialUsers = JSON.parse(localStorage.getItem("users")) || [];

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: initialUsers,
    isAuthenticated: false,
    currentUser: null,
  },
  reducers: {
    registrationSuccess: (state, action) => {
        state.users.push(action.payload);

        // Store updated users array in local storage
        localStorage.setItem('users', JSON.stringify(state.users));    },
    loginSuccess: (state, action) => {
      const { email, password } = action.payload;
        console.log(email)
      // Filter logic to find the user with matching email and password
      const user = state.users.find(user => user.email === email);
      
      if (user && user.password === password) {
          state.isAuthenticated = true;
          state.currentUser = user;
        //   console.log("" user.email    )
      } else {
        state.isAuthenticated = false;
        state.currentUser = null;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});

export const { registrationSuccess, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
