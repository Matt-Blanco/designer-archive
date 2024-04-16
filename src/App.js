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

  const [hoverCountry, updateHover] = useState()
  const [selectedCountries, updateSelectedCountries] = useState([])
  const [artifactType, updateArtifactType] = useState();

  const updateCountries = (country) => {
    if (selectedCountries.includes(country)) {
      updateSelectedCountries(selectedCountries.filter(co => co !== country))
    } else {
      selectedCountries.push(country)
      updateSelectedCountries([...selectedCountries])
    }
  }

  return (
    <div className="App">
      <div id="topContainer">
        <Legend
          types={uniqueTypes}
          hoverCountry={hoverCountry}
          updateHover={updateHover}
          selectedCountries={selectedCountries}
          updateCountries={updateCountries}
          artifactType={artifactType}
          updateArtifactType={updateArtifactType}
        />
        <Visualization
          hoverCountry={hoverCountry}
          selectedCountries={selectedCountries}
          data={sorted}
          updateHoverCountry={updateHover}
          artifactType={artifactType}
          updateArtifactType={updateArtifactType}
        />
      </div>
    </div>
  );
}

export default App;
