import React, { useState } from "react";
import styles from "./Form.module.css";
const ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form className={styles.form}>
        <p>名前入力欄</p>
        <input
          type="text"
          value={name}
          onChange={handleName}
          className={styles.input}
        />
        <p>Eメール入力欄</p>
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          className={styles.input}
        />
      </form>
    </>
  );
};

export default ControlledForm;
