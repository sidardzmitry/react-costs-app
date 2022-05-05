import "./Diagram.css";
import DiagramColumn from "../DiagramColumn/DiagramColumn";

const Diagram = (props) => {
  const {dataSets} = props;
  const dataSetsValues = dataSets.map(dataSet => dataSet.value)
  const maxMonthCosts = Math.max(...dataSetsValues)
  return (
    <div className="diagram">
      {dataSets.map((dataSet) => (
        <DiagramColumn
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
