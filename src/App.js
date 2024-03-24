import { Legend } from './sections/legend';
import data from "./data.json"
import './style.css';
import { Visualization } from './sections/visualization';

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

  return (
    <div className="App">
      <div id="topContainer">
        <Legend types={uniqueTypes}/>
        <Visualization
          data={sorted}
        />
      </div>
    </div>
  );
}

export default App;
