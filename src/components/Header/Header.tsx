import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { BuildingIcon } from "../shared/Icons/BuildingIcon";
import styles from "./Header.module.scss"

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Честный агент</div>
      <div className={styles.description}>менеджер процесса</div>

      <nav className={styles.navigation}>
        <NavLink 
          to={"market"}
          className={({isActive}) => clsx(styles.item, isActive && styles.active)}
        >
          <BuildingIcon />
          <span className={styles.itemTitle}>Организации</span>
        </NavLink>
      </nav>
    </div>
  );
};