import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { FormModal } from "../../../../components/shared/FormModal";
import { TextInput } from "../../../../components/shared/Inputs";
import { EEndpoints } from "../../../../enums/endpoints";
import { useAppDispatch } from "../../../../hooks/redux";
import { usePatch } from "../../../../hooks/useFetch";
import { ICompany } from "../../../../models/ICompany";
import { getCompany } from "../../../../store/reducers/ActionCreators";

interface IMainInformationFormModalProps {
  company: ICompany;
  onRequestClose: () => void;
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function MainInformationFormModal(props: IMainInformationFormModalProps) {
  const dispatch = useAppDispatch();
  const [fetchError, setFetchError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      shortName: props.company.shortName,
      businessEntity: formData.get("businessEntity")?.toString() ?? props.company.businessEntity,
      contract: {
        // "issue_date": "2015:03:12",
        no: formData.get("no")?.toString() ?? props.company.contract.no,
      },
      type: formData.getAll("type").map(el => el.toString())
    }
    const [res] = await usePatch(data, EEndpoints.companies);
    if (res.status === 200) {
      dispatch(getCompany)
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
        initialValue={props.company.name}
        label="Полное название"
        name="name"
      />
      <TextInput
        initialValue={props.company.businessEntity}
        label="Форма"
        name="businessEntity"
      />
      <fieldset name="contract">
        <legend>Номер и дата договора</legend>
        <TextInput
          initialValue={props.company.contract.no}
          label="Договор"
          name="no"
        />
        <input defaultValue={new Date(props.company.contract.issue_date).toLocaleDateString("en-CA")} type="date" name={"issue_date"} className="dateInput" />

      </fieldset>
      <fieldset name="type">
        <legend>Выберите тип компании</legend>
        <label>
          Агент
          <input
            type="checkbox"
            name="type"
            defaultChecked={props.company.type.includes("agent")}
            value="agent" />
        </label>
        <label>
          Подрядчик
          <input
            type="checkbox"
            name="type"
            value="contractor"
            defaultChecked={props.company.type.includes("contractor")}
          />
        </label>
      </fieldset>
    </FormModal>
  );
}