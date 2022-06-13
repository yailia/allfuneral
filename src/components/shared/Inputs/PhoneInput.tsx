import clsx from "clsx";
import { useState } from "react";
import styles from "./Inputs.module.scss";
import InputMask from 'react-input-mask';

interface IPhoneInputProps {
  label?: string;
  initialValue: string | number;
  name?: string;
}

export function PhoneInput(props: IPhoneInputProps) {
  const [isEmtpty, setIsEmpty] = useState(false)
  return (
    <div className={styles.group}>
      <label 
        className={clsx(styles.label, !isEmtpty && styles.hide)} 
        >
          {props.label}
      </label>
      <InputMask
        name={props.name}
        className={styles.input}
        defaultValue={props.initialValue} 
        mask="+7(999)999-99-99" 
        onChange={(e) => setIsEmpty(!e.target.value.length)}
        />
    </div>
  );
};