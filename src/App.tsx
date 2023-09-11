import React from "react";
import ControlledForm from "./components/ControlledForm";
import UnControlledForm from "./components/UnControlledForm";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.wrapper}>
      <h2>制御コンポーネント</h2>
      <ControlledForm />
      <h2>非制御コンポーネント</h2>
      <UnControlledForm />
    </div>
  );
};

export default App;
