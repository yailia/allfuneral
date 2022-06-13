import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface IUserState extends IUser {
  error: string,
  isLoading: boolean,
}

const initialState: IUserState = {
  name: "USERNAME",
  token: '',
  error: '',
  isLoading: false,
}

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    fetchingToken(state) {
      state.isLoading = true;
    },
    fetchingTokenSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false,
      state.error = '',
      state.token = action.payload
      if(!state.error) {
        localStorage.setItem('X-AUTH-TOKEN', action.payload)
      }
    },
    fetchingTokenError(state, action: PayloadAction<string>) {
      state.isLoading = false,
      state.error = action.payload
    }
  }
})

export default tokenSlice.reducer