import React, { useState } from "react";
import CostNew from "../CostNew/CostNew";
import styles from "./CostForm.module.css";

const CostForm = (props) => {
  const { onAddCost } = props;
  const [isFormVisible, setFormVisible] = useState(false);

  const saveCostDataHandler = (inpCostData) => {
    const costData = {
      ...inpCostData,
      id: Math.random().toString(),
    };
    onAddCost(costData);
    setFormVisible(false);
  };
  const inputCostDataHandler = () => {
    setFormVisible(true);
  };
  const cancelFormHandler = () => {
    setFormVisible(false)
  }
  return (
    <div className={`${"container"} ${styles["form__cost"]} ${"bg-dark"}`}>
      {!isFormVisible ? (
        <button
          className={`${"btn"} ${styles["cost__form__btn"]}`}
          onClick={inputCostDataHandler}
        >
          Add New Cost
        </button>
      ) : (
        <CostNew onSaveCostData={saveCostDataHandler} onCancel={cancelFormHandler}/>
      )}
    </div>
  );
};

export default CostForm;
