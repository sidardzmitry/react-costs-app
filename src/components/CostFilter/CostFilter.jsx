import React, { useState } from "react";
import "./CostFilter.css";

const CostFilter = (props) => {
    const {onChangeYear, year} = props;

  const yearChangeHandler = (event) => {
    onChangeYear(event.target.value);
  };

  return (
    <div className="cost__filter">
      <div className="cost__filter__control">
        <label className="cost__filter__label">Selection by year</label>
        <select
          className="cost__filter__select form-select form-select-sm"
          onChange={yearChangeHandler}
          value={year}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostFilter;
