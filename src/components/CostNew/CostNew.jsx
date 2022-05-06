import React, { useState } from "react";
import styles from "./CostNew.module.css";

const CostNew = (props) => {
  const { onSaveCostData, onCancel } = props;

  const [inpTitle, setInpTitle] = useState("");
  const [inpPrice, setInpPrice] = useState("");
  const [inpDate, setInpDate] = useState("");

  const titleHandler = (e) => {
    setInpTitle(e.target.value);
  };
  const priceHandler = (e) => {
    setInpPrice(e.target.value);
  };
  const dateHandler = (e) => {
    setInpDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      description: inpTitle,
      price: inpPrice,
      date: new Date(inpDate),
    };
    setInpTitle("");
    setInpPrice("");
    setInpDate("");
    onSaveCostData(costData);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="cost__new__controls">
          <div className="mb-3 cost__new__control input-group">
            <span htmlFor="shoppingTitle" className={`${"input-group-text"} ${styles["label__form"]}`}>Title</span>
            <input
              className="form-control form-control"
              id="shoppingTitle"
              type="text"
              placeholder="Title"
              value={inpTitle}
              onChange={titleHandler}
            />
          </div>
          <div className="mb-3 cost__new__control input-group">
            <span htmlFor="price" className={`${"input-group-text"} ${styles["label__form"]}`}>Price</span>
            <input
              className="form-control form-control"
              id="price"
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Price"
              value={inpPrice}
              onChange={priceHandler}
            />
          </div>
          <div className="mb-3 cost__new__control input-group">
            <span htmlFor="date" className={`${"input-group-text"} ${styles["label__form"]}`}>Date</span>
            <input
              className="form-control form-control"
              id="date"
              type="date"
              min="2020-01-01"
              step="2022-12-31"
              placeholder="Date"
              value={inpDate}
              onChange={dateHandler}
            />
          </div>
          <div className={styles["form__btn"]}>
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
            <button
              type="button"
              onClick={onCancel}
              className={`${"btn"} ${"btn-success"} ${styles["btn__can"]}`}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CostNew;
