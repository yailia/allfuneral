import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../../components/shared/LoadingSpinner";
import { toRusType } from "../../../helpers/toRusType";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getCompany } from "../../../store/reducers/ActionCreators";
import { CompanyTitle } from "../CompanyTitle";
import { ContactInformation } from "../ContactInformation/ContactInformation";
import { Images } from "../Images/Images";
import { MainInformation } from "../MainInformation";
import styles from "./MarketBody.module.scss"

export function MarketBody() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCompany)
  }, [])
  const { isLoading, company, error } = useAppSelector(state => state.companyReducer);

  if (isLoading) return <LoadingSpinner />

  return (
    <div className={styles.container}>
      <CompanyTitle />
      <MainInformation />
      <ContactInformation />
      <Images />
    </div>
  );
};