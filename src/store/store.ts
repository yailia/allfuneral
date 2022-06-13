import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { companyReducer } from "./reducers/CompanySlice";
import { contactReducer } from "./reducers/ContactSlice";
import tokenReducer from "./reducers/tokenSlice";

const rootReducer = combineReducers({
  companyReducer,
  contactReducer,
  tokenReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];