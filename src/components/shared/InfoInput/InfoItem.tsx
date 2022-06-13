import styles from "./InfoItem.module.scss";

export enum links {
  email = "mailto",
  tel = "tel"
}

interface IInfoItemProps {
  title: string;
  name: string;
  isLink?: boolean
  type?: links;
  to?: string | number;
}

export function InfoItem(props: IInfoItemProps) {
  return (
    <div className={styles.group}>
      <span className={styles.label}>{props.title}</span>
      { !props.isLink 
        ? <span className={styles.name}>{props.name}</span>
        : <a className={styles.name} href={`${props.type}:${props.to}`}>{props.name}</a>
      }
      
    </div>
  );
}