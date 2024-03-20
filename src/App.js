import { BottomVisualization } from './sections/bottom-visualization';
import { FocusedVisualization } from './sections/focused-visualization';
import { Legend } from './sections/legend';
import data from "./data.json"
import './style.css';
import { useState } from 'react';

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

  const focusedData = selected !== "NA" ? sorted[selected].sort((a, b) => a.month - b.month) : []

  return (
    <div className="App">
      <div id="topContainer">
        <Legend types={uniqueTypes}/>
        <FocusedVisualization
          year={selected}
          data={focusedData}
          selected={selected}
        />
      </div>
      <BottomVisualization
        years={Object.keys(sorted)}
        selected={selected}
        data={sorted}
        updateSelected={updateSelected}
      />
    </div>
  );
}

export default App;
