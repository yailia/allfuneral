import { useAppDispatch } from "../../../hooks/redux";
import { companyDelete } from "../../../hooks/useFetch";
import { getCompany, getContact } from "../../../store/reducers/ActionCreators";
import styles from "./MarketHeader.module.scss"

export function MarketHeader() {
  const dispatch = useAppDispatch();
  function handleReloadClock () {
    dispatch(getCompany);
    dispatch(getContact);
  }
  return (
    <div className={styles.container}>
      <button type="button" className={styles.backBtn}>
        к списку юридических лиц
      </button>
      <ul className={styles.controlsList}>
        <li className={styles.controlsItem}>
          <button className={styles.link} />
        </li>
        <li className={styles.controlsItem}>
          <button className={styles.refresh} onClick={handleReloadClock}/>
        </li>
        <li className={styles.controlsItem}>
          <button className={styles.delete} onClick={() => companyDelete(12)}/>
        </li>
      </ul>
    </div>
  );
};