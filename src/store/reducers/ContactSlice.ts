import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../models/IContact";

export interface IContactState {
  contact: IContact;
  isLoading: boolean;
  error: string;
}

const initialState: IContactState = {
  contact: {
    email: "",
    firstname: "",
    id: "",
    lastname: "",
    patronymic: "",
    phone: 0
  },
  isLoading: false,
  error: '',
}

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    contactFetching(state) {
      state.isLoading = true;
    },
    contactFetchingSucsess(state, action: PayloadAction<IContact>) {
      state.isLoading = false;
      state.error = '';
      state.contact = action.payload;
    },
    contactFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
})

export const contactReducer = contactSlice.reducer;


