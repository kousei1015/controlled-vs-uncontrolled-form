import React, { useRef } from "react";
import styles from "./Form.module.css";
const UnControlledForm = () => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);

  return (
    <>
      <form className={styles.form}>
        <p>名前入力欄</p>
        <input type="text" ref={nameInput} className={styles.input} />
        <p>Eメール入力欄</p>
        <input type="text" ref={emailInput} className={styles.input} />
      </form>
    </>
  );
};

export default UnControlledForm;
