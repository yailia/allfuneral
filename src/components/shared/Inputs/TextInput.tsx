import clsx from "clsx";
import { useState } from "react";
import styles from "./Inputs.module.scss";

interface ITextInputProps {
  label?: string;
  initialValue: string | number;
  name?: string;
}

export function TextInput(props: ITextInputProps) {
  const [isEmtpty, setIsEmpty] = useState(false)
  return (
    <div className={styles.group}>
      <label 
        className={clsx(styles.label, !isEmtpty && styles.hide)} 
        >
          {props.label}
      </label>
      <input
        name={props.name}
        type="text" 
        className={styles.input}
        defaultValue={props.initialValue}
        onChange={(e) => setIsEmpty(!e.target.value.length)}
      />
    </div>
  );
};