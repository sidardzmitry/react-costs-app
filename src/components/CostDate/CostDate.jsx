import styles from "./CostDate.module.css";

const CostDate = (props) => {
  const { date } = props;
  const year = date.getFullYear();
  const month = date.toLocaleString("en-EN", { month: "long" });
  const day = date.toLocaleString("en-EN", { day: "2-digit" });

  return (
    <div className={styles["cost__date"]}>
      <div className={styles["cost__date__month"]}>{month}</div>
      <div className={styles["cost__date__year"]}>{year}</div>
      <div className={styles["cost__date__day"]}>{day}</div>
    </div>
  );
};

export default CostDate;
