import "./CostItem.css";
import CostDate from "../CostDate/CostDate";

const CostItem = (props) => {
  const {description, price, date} = props;

  return (
    <div className="cost__item">
      <CostDate date={date} />
      <div className="cost__items">
        <button className="btn btn-outline-warning cost__item__price">{price} $</button>
        <h5 className="cost__item__desc">{description}</h5>
      </div>
    </div>
  );
};

export default CostItem;
