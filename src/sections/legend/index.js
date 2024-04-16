import { colors } from "../../utils"
import { Map } from "../../components/map"

export function Legend(props) {

  const handlePointerOver = (type) => {
    props.updateArtifactType(type)
  }

  return (
    <div id="legend">
      <h1 id="title">
        The Archive<br />of a Designer
      </h1>
      <p id="description">
        It is common practice for designer's to have a lot of collected artifacts to look back on or inspire then throughout the design process. Here's my collection:
      </p>
      <div className="lGroup">
        <h5 className="subTitle">
          Types of Artifacts
        </h5>
        <p>(Hover over types to filter by type.)</p>
        <ul id="artifactTypes">
          {
            props.types.map((type) => {
              const hoverClass = props.artifactType ? props.artifactType === type ? 'hoverType' : 'notHoverType': ''
              return (
                <li
                  key={`artifact-type-${type}`}
                  className={`type ${hoverClass}`}
                  onPointerOver={() => handlePointerOver(type)}
                  onPointerOut={() => handlePointerOver()}
                >
                  <div
                    className="artifact"
                    style={{ backgroundColor: colors[type] }}
                  >
                  </div>
                  <span>{type}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="lGroup">
        <div id="readingTime">
          <Map
            selectedCountries={props.selectedCountries}
            updateCountries={props.updateCountries}
            updateHoverCountry={props.updateHover}
            hoverCountry={props.hoverCountry}
          />
        </div>
        <h5 className="subTitle">
          Showing Artifacts From: 
          {
            props.hoverCountry ? 
            ` ${props.hoverCountry}` :  
            props.selectedCountries.length > 0 ? 
            ` ${props.selectedCountries.sort().join(', ')}` : " AT, BE, CA, CH, CZ, DE, ES, FR, IE, IT, IS, MA, NL, PL, PT, UK, US, SI"
          }
        </h5>
        <p className="subTitle">
          (Hover or Select within the map to Filter Artifacts <br />by Country.)
        </p>
      </div>
    </div>
  )
}
