import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [displayedSushis, setDisplayedSushis] = useState([]);
  const [eatenSushis, setEatenSushis] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(`${API}?_start=0&_limit=4`) // API Query string
      .then((res) => res.json())
      .then((data) => {
        setSushis(data);
        setDisplayedSushis(data.slice(0, 4));
      })
      .catch((error) => console.log(error));
  }, []);

  // Function to collect the next four sushis
  const handleNextSushis = () => {
    fetch(`${API}?_start=${sushis.length}&_limit=4`)
      .then((res) => res.json())
      .then((data) => {
        const newSushis = [...sushis, ...data];
        setSushis(newSushis);
        setDisplayedSushis(newSushis.slice(sushis.length, sushis.length + 4));
      })
      .catch((error) => console.log(error));
  };

  const handleEatenSushi = (id) => {
    const eatenSushi = sushis.find((sushi) => sushi.id === id);
    if (eatenSushi) {
      setEatenSushis([...eatenSushis, id]);
      setBudget(budget - eatenSushi.price);
    }
  };

  return (
    <div className="app">
      <SushiContainer
        sushis={displayedSushis}
        onNext={handleNextSushis}
        onEatSushi={handleEatenSushi}
        budget={budget}
      />
      <Table plates={eatenSushis} budget={budget} />
    </div>
  );
}

export default App;
