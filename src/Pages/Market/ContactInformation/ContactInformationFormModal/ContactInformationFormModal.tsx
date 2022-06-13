import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { FormModal } from "../../../../components/shared/FormModal";
import { PhoneInput, TextInput } from "../../../../components/shared/Inputs";
import { EEndpoints } from "../../../../enums/endpoints";
import { useAppDispatch } from "../../../../hooks/redux";
import { usePatch } from "../../../../hooks/useFetch";
import { IContact } from "../../../../models/IContact";
import { getCompany, getContact } from "../../../../store/reducers/ActionCreators";

interface IContactInformationFormModalProps {
  contact: IContact;
  onRequestClose: () => void;
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function ContactInformationFormModal(props: IContactInformationFormModalProps) {
  const dispatch = useAppDispatch();
  const [fetchError, setFetchError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const phone = formData.get("phone")?.toString().replace(/[^0-9]/g,"")
    const data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      patronymic: formData.get("patronymic"),
      phone: phone,
      email: formData.get("email"),
    }
    const [res] = await usePatch(data, EEndpoints.contacts);
    console.log(res)
    if (res.status === 200) {
      dispatch(getContact)
      props.setModalOpen(false);
      setFetchError(false);
    } else {
      setFetchError(true)
    }
  }
  return (
    <FormModal
      handleSubmit={handleSubmit}
      isModalOpen={props.isModalOpen}
      onRequestClose={props.onRequestClose}
      error={fetchError}
    >
      <TextInput
        initialValue={props.contact.firstname}
        label="Имя"
        name="firstname"
      />
      <TextInput
        initialValue={props.contact.lastname}
        label="Фамилия"
        name="lastname"
      />
      <TextInput
        initialValue={props.contact.patronymic}
        label="Отчество"
        name="patronymic"
      />
      <PhoneInput
        initialValue={props.contact.phone}
        label="Контактный номер"
        name="phone"
      />
      <TextInput
        initialValue={props.contact.email}
        label="Эл. почта"
        name="email"
      />
    </FormModal>
  );
}