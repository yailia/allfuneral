import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompany } from "../../models/ICompany";

export interface ICompanyState {
  company: ICompany;
  isLoading: boolean;
  error: string;
}

const initialState: ICompanyState = {
  company: {
    businessEntity: "",
    contactId: "",
    contract: {
      issue_date: "",
      no: ""
    },
    id: "",
    name: "",
    photos: [],
    shortName: "",
    status: "",
    type: [],
  },
  isLoading: false,
  error: '',
}

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    companyFetching(state) {
      state.isLoading = true;
    },
    companyFetchingSucsess(state, action: PayloadAction<ICompany>) {
      state.isLoading = false;
      state.error = '';
      state.company = action.payload;
    },
    companyFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
})

export const companyReducer = companySlice.reducer;


