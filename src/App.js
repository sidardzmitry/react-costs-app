import React, {useState} from 'react';
import './App.css';
import Costs from "./components/Costs/Costs";
import CostForm from './components/CostForm/CostForm';
import Header from './Layout/Header/Header';

const INITIAL_COSTS = [
  {
    id: 1,
    date: new Date(2021, 4, 23),
    description: "Iphone 13",
    price: 1100,
  },
  {
    id: 2,
    date: new Date(2022, 1, 10),
    description: "MacBook Pro",
    price: 3100,
  },
  {
    id: 3,
    date: new Date(2020, 5, 15),
    description: "AirPods",
    price: 345,
  },
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
  <div className="app">
    <Header/>
    <CostForm onAddCost={addCostHandler}/>
    <Costs costs={costs}/>
  </div>
  );
};

export default App;
