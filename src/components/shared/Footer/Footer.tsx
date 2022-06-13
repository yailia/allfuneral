import styles from "./Footer.module.scss" 

export function Footer() {
  return (
    <div className={styles.container}>
      <small className={styles.copyrights}>
        © 1992 - 2020 Честный Агент © Все права защищены.
      </small>
      <a href="tel:+74951502112" className={styles.phone}>8(495) 150-21-12</a>
    </div>
  );
};