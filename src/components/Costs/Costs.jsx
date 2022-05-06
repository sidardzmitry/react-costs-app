import React, { useState } from "react";
import styles from "./Costs.module.css";
import CostItem from "..//CostItem/CostItem";
import CostFilter from "../CostFilter/CostFilter";
import CostsDiagram from "../CostsDiagram/CostsDiagram";

const Costs = (props) => {
  const { costs } = props;
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filterCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className={`${"container"} ${styles["app__costs"]}`}>
      <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostsDiagram costs={filterCosts}/>
      <div className={styles.costs}>
        {filterCosts.length === 0 ? (
          <div className={styles["text__no__expenses"]}>No expenses</div>
        ) : (
          filterCosts.map((cost) => (
            <CostItem
              date={cost.date}
              description={cost.description}
              price={cost.price}
              key={cost.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Costs;
