import { Outlet } from "react-router-dom";
import { Aside } from "./Aside";
import { Header } from "./Header";
import styles from "./Layout.module.scss"
import { Footer } from "./shared/Footer";

export function Layout() {
  return (
    <div className={styles.gridContainer}>
      <header className={styles.header}>
        <Header />
      </header>
      <aside className={styles.aside}>
        <Aside />
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
      <div id="modal-root"></div>
    </div>
  );
};