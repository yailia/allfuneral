import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { ERoutes } from "../../enums/routes";
import { HomeIcon } from "../shared/Icons/HomeIcon";
import { LogoutIcon } from "../shared/Icons/LogoutIcon";
import { MarketIcon } from "../shared/Icons/MarketIcon";
import { SearchIcon } from "../shared/Icons/SearchIcon";
import { SettingsIcon } from "../shared/Icons/SettingsIcon";
import { SupportIcon } from "../shared/Icons/SupportIcon";
import styles from "./Aside.module.scss"

export function Aside() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to={ERoutes.home}
          className={({isActive}) => clsx(styles.item, isActive && styles.active)}
        >
          <HomeIcon />
        </NavLink>
        <NavLink
          to={ERoutes.market}
          className={({isActive}) => clsx(styles.item, isActive && styles.active)}
        >
          <MarketIcon />
        </NavLink>
        <NavLink
          to={ERoutes.search}
          className={({isActive}) => clsx(styles.item, isActive && styles.active)}
        >
          <SearchIcon />
        </NavLink>
      </nav>
      <nav className={styles.nav}>
        <NavLink
          to={ERoutes.settings}
          className={({isActive}) => clsx(styles.item, isActive && styles.active)}
        >
          <SettingsIcon />
        </NavLink>
        <NavLink to={ERoutes.support}
          className={({isActive}) => clsx(styles.item, isActive && styles.active)}>
          <SupportIcon />
        </NavLink>
        <NavLink to={ERoutes.exit}
          className={({isActive}) => clsx(styles.item, isActive && styles.active)}>
          <LogoutIcon />
        </NavLink>
      </nav>
    </div>
  );
};