import PropagateLoader from "react-spinners/PropagateLoader";
import styles from "./LoadingSpinner.module.scss";

export function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <PropagateLoader />
    </div>
  )
}