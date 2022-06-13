import axios from "axios"
import { useAppSelector } from "../../hooks/redux";
import { ICompany } from "../../models/ICompany";
import { IContact } from "../../models/IContact";
import { AppDispatch } from "../store"
import { companySlice } from "./CompanySlice";
import { contactSlice } from "./ContactSlice";
import { tokenSlice } from "./tokenSlice";

export const getToken = async (dispatch:AppDispatch) => {
  try {
    dispatch(tokenSlice.actions.fetchingToken())
    const response = await fetch('/auth?user=USERNAME');
      const token = response.headers.get("authorization");
      if(!token) throw Error
      dispatch(tokenSlice.actions.fetchingTokenSuccess(token))
     } catch(e: any) {

     }
  }

export const getCompany = async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("X-AUTH-TOKEN") || useAppSelector(state => state.tokenReducer.token);
  try {
    dispatch(companySlice.actions.companyFetching())
    const response = await axios.get<ICompany>(`http://135.181.35.61:2112/companies/12`,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    dispatch(companySlice.actions.companyFetchingSucsess(response.data))
  } catch(e: any) {
    dispatch(companySlice.actions.companyFetchingError(e.message))
  }
}

export const getContact = async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("X-AUTH-TOKEN") 
  ? localStorage.getItem("X-AUTH-TOKEN")
  : useAppSelector(state => state.tokenReducer.token);
  try {
    dispatch(contactSlice.actions.contactFetching())
    const response = await axios.get<IContact>(`http://135.181.35.61:2112/contacts/16`,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    dispatch(contactSlice.actions.contactFetchingSucsess(response.data))
  } catch(e: any) {
    dispatch(contactSlice.actions.contactFetchingError(e.message))
  }
}
