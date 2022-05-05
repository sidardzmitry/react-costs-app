import React, { useState } from "react";
import "./Costs.css";
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
    <div className="container app__costs">
      <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostsDiagram costs={filterCosts}/>
      <div className="costs">
        {filterCosts.length === 0 ? (
          <div className="text__no__expenses">No expenses</div>
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
