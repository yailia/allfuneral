import { AddIcon } from "../Icons/AddIcon";
import styles from "./SubmitBtn.module.scss"

interface ISubmitBtnProps {
  title: string;
  type?: "button" | "submit";
  handleClick?: ()=>void;
}

export function SubmitBtn(props: ISubmitBtnProps) {
  const action = props.type ?? "submit"
  return (
    <button onClick={props.handleClick} type={action} className={styles.button}><AddIcon />{props.title}</button>
  )
}