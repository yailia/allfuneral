import { FormEvent, ReactNode } from "react";
import ReactModal from "react-modal";
import { modalStyles } from "../../../helpers/modalStyles";
import { AddIcon } from "../Icons/AddIcon";
import { SubmitBtn } from "../SubmitBtn";
import styles from "./FormModal.module.scss"

interface IFormModalProps {
  isModalOpen: boolean;
  children: ReactNode;
  onRequestClose: () => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  error?: boolean;

}

export function FormModal(props: IFormModalProps) {
  return (
    <ReactModal
      style={modalStyles}
      isOpen={props.isModalOpen}
      onRequestClose={props.onRequestClose}
      ariaHideApp={false}
    >
      <button onClick={props.onRequestClose} className={styles.closeBtn}><AddIcon/></button>
      <form onSubmit={props.handleSubmit} className="flex-container" style={{ flexDirection: "column" }}>
        {props.children}
        <div className="buttonsContainer">
          <SubmitBtn title="Сохранить изменения" />
        </div>
      </form>
      {props.error && <p style={{ color: "red" }}>Произошла ошибка, попробуйте снова</p>}
    </ReactModal>
  )
}