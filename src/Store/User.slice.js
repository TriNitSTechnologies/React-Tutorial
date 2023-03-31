import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../Hooks/Api";
import { USERS_URL } from "../utils/Endpoints";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = API.get(USERS_URL);
  const data = await response.data;
  return data;
});

const initialState = {
  username: "",
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [...action.payload];
    });
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
