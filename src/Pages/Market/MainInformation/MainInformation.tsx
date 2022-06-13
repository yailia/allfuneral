import { useEffect, useState } from "react";
import { EditBtn } from "../../../components/shared/EditBtn/EditBtn";
import { InfoItem } from "../../../components/shared/InfoInput";
import { LoadingSpinner } from "../../../components/shared/LoadingSpinner";
import { toRusType } from "../../../helpers/toRusType";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getCompany } from "../../../store/reducers/ActionCreators";
import styles from "./MainInformation.module.scss"
import { MainInformationFormModal } from "./MainInformationFormModal";

export function MainInformation() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { isLoading, company, error } = useAppSelector(state => state.companyReducer);
  const contract = `${company.contract.no} от ${new Date(company?.contract.issue_date).toLocaleDateString()}`
  const type = toRusType(company?.type).join(', ');


  if (isLoading) return <LoadingSpinner />
  if (error) return <h2>Произошла ошибка, попробуйте обновить страницу</h2>
  return (
    <>
      <div className="flex-container">
        <h3>Общая информация</h3>
        <EditBtn handleClick={() => setModalOpen(!isModalOpen)} />
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <InfoItem
            title="Полное название:"
            name={company.name}
          />
        </li>
        <li className={styles.item}>
          <InfoItem
            title="Договор:"
            name={contract}
          />
        </li>
        <li className={styles.item}>
          <InfoItem
            title="Форма:"
            name={company.businessEntity}
          />
        </li>
        <li className={styles.item}>
          <InfoItem
            title="Тип:"
            name={type}
          />
        </li>
      </ul>
      <MainInformationFormModal
        setModalOpen={setModalOpen} 
        company={company}
        isModalOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
      />
    </>
  )
} 