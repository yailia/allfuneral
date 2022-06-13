import clsx from "clsx";
import styles from "./SectionTitle.module.scss";

interface ISectionTitleProps {
  title: string;
  As?: "h1" | "h2" | "h3";
  isModalOpen?: boolean;
}

export function SectionTitle({As = "h2", ...props}: ISectionTitleProps) {
  return (
      <As>{props.title}</As>
  );
};