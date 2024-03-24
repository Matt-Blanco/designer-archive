import { Legend } from './sections/legend';
import data from "./data.json"
import './style.css';
import { Visualization } from './sections/visualization';
import { useState } from 'react';

function App() {
  const uniqueTypes = data.reduce((u, curr) => {
    if (!u.includes(curr.type)) {
      u.push(curr.type)
    }
    return u
  }, [])
  
  const sorted = data.reduce((u, curr) => {
    if (u[curr.year] === undefined) {
      u[curr.year] = [curr]
    } else {
      u[curr.year].push(curr)
    }
    return u
  }, {})

  const [filterCountry, updateHover] = useState()

  return (
    <div className="App">
      <div id="topContainer">
        <Legend
          types={uniqueTypes}
          filterCountry={filterCountry}
          updateHover={updateHover}
        />
        <Visualization
          filterCountry={filterCountry}
          data={sorted}
        />
      </div>
    </div>
  );
}

export default App;
