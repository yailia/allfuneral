import { useEffect, useState } from "react";
import { EditBtn } from "../../../components/shared/EditBtn/EditBtn";
import { InfoItem } from "../../../components/shared/InfoInput";
import { LoadingSpinner } from "../../../components/shared/LoadingSpinner";
import { toRenderPhone } from "../../../helpers/phoneMask";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getContact } from "../../../store/reducers/ActionCreators";
import { ContactInformationFormModal } from "./ContactInformationFormModal";
import styles from "./ContactInformation.module.scss"
import { links } from "../../../components/shared/InfoInput/InfoItem";

export function ContactInformation() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getContact)
  }, [])
  const [isModalOpen, setModalOpen] = useState(false);
  const { isLoading, contact, error } = useAppSelector(state => state.contactReducer);
  const phoneNumber = toRenderPhone(contact.phone)
  
  if (isLoading) return <LoadingSpinner />
  if (error) return <h2>Произошла ошибка, попробуйте обновить страницу</h2>
  return (
    <>
      <div className="flex-container">
        <h3>Контактные данные</h3>
        <EditBtn handleClick={() => setModalOpen(!isModalOpen)} />
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <InfoItem
            title="ФИО:"
            name={`${contact.lastname} ${contact.firstname} ${contact.patronymic}`}
          />
        </li>
        <li className={styles.item}>
          <InfoItem
            isLink
            type={links.tel}
            to={contact.phone}
            title="Телефон:"
            name={phoneNumber}
          />
        </li>
        <li className={styles.item}>
          <InfoItem
            isLink
            type={links.email}
            to={contact.email}
            title="Эл. почта:"
            name={contact.email}
          />
        </li>
      </ul>
      <ContactInformationFormModal
        setModalOpen={setModalOpen} 
        contact={contact}
        isModalOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
      />
    </>
  )
} 