import { Legend } from './sections/legend';
import data from "./data.json"
import './style.css';
import { useState } from 'react';
import { Visualization } from './sections/focused-visualization/visualization';

function App() {
  const [selected, updateSelected] = useState('NA')

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

  return (
    <div className="App">
      <div id="topContainer">
        <Legend types={uniqueTypes}/>
        <Visualization
          year={selected}
          data={sorted}
          selected={selected}
        />
      </div>
    </div>
  );
}

export default App;
