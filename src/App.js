import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';

function GetAnimals(){
    const animals = ['cat','dog','horse','gator','bird','cow']
    return animals[Math.floor(Math.random()* animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleCLick = () => {
    setAnimals([...animals, GetAnimals()]);
    console.log("Animal");
  };

  const renderAnimal = animals.map((animal,index) =>{
     return < AnimalShow type={animal} key={index}/>;
  })

  return (
    <div className="app">
      
      <button onClick={handleCLick}>Add Animals</button>
      <div className="animal-list">
        {renderAnimal}
      </div>
    </div>
  );
}

export default App;
