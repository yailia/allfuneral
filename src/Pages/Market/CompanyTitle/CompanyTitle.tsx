import { FormEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { EditBtn } from "../../../components/shared/EditBtn/EditBtn";
import { FormModal } from "../../../components/shared/FormModal";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { usePatch } from "../../../hooks/useFetch";
import { getCompany } from "../../../store/reducers/ActionCreators";
import styles from "./CompanyTitle.module.scss"
import { EEndpoints } from "../../../enums/endpoints";
import { TextInput } from "../../../components/shared/Inputs";

export function CompanyTitle() {
  const dispatch = useAppDispatch();
  const title = useAppSelector(state => state.companyReducer.company.shortName);
  const [isModalOpen, setModalOpen] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const [res] = await usePatch({shortName: e.currentTarget.shortName.value}, EEndpoints.companies)
    console.log(res)
    if(res.status === 200) {
      dispatch(getCompany)
      setModalOpen(false);
      setFetchError(false);
    } else {
      setFetchError(true);
    }
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <EditBtn handleClick={() => setModalOpen(!isModalOpen)}/>
      <FormModal
        isModalOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        handleSubmit={handleSubmit}
        error={fetchError}
        >
        <TextInput name={"shortName"} initialValue={title} label="Название организации"/>
      </FormModal>
    </div>
  );
}