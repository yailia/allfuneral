import styles from "./EditBtn.module.scss"

interface IEditBtnProps {
  handleClick: () => void;
}

export function EditBtn(props: IEditBtnProps) {
  return(
    <button 
      className={styles.editBtn} 
      onClick={props.handleClick}
    />
  );
};