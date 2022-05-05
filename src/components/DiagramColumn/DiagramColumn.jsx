import "./DiagramColumn.css";

const DiagramColumn = (props) => {
  const { value, maxValue, label } = props;
  let columnFillHeight = "0%";
  if (maxValue > 0) {
    columnFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="diagram__column">
      <div className="diagram__column__inner">
        <div
          className="diagram__column__fill"
          style={{
            height: columnFillHeight,
          }}
        ></div>
      </div>
      <div className="diagram__column__label">{label}</div>
    </div>
  );
};

export default DiagramColumn;
