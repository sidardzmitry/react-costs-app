import styles from "./CostItem.module.css";
import CostDate from "../CostDate/CostDate";

const CostItem = (props) => {
  const {description, price, date} = props;

  return (
    <div className={styles["cost__item"]}>
      <CostDate date={date} />
      <div className={styles["cost__items"]}>
        <button className="btn btn-outline-warning cost__item__price">{price} $</button>
        <h5 className={styles["cost__item__desc"]}>{description}</h5>
      </div>
    </div>
  );
};

export default CostItem;
