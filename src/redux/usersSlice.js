import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../firebase/firebaseConfig";

export const fetchUsersData = createAsyncThunk(
  "pagination",
  async (thunkAPI, { getState, dispatch }) => {
    try {
      const usersRef = await firestore.collection("users").get();

      let usersData = [];
      if (!usersRef.empty) {
        for (let i in usersRef.docs) {
          usersData.push(usersRef.docs[i].data());
        }
      }
      return usersData;
    } catch (error) {
      return error;
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    usersList: [],
    selectedUser: "",
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: {
    [fetchUsersData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsersData.fulfilled]: (state, action) => {
      state.usersList = action.payload;
      state.loading = false;
    },
    [fetchUsersData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;
