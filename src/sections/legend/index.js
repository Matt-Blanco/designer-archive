import { colors } from "../../utils"
import { Map } from "../../components/map"

export function Legend(props) {
  return (
    <div id="legend">
      <h1 id="title">
        The Archive of <br />a Designer
      </h1>
      <p id="description">
        It is common practice for designer's to have a lot of collected artifacts to look back on or inspire then throughout the design process. Here's my collection:
      </p>
      <div className="lGroup">
        <h5 className="subTitle">
          Types of Artifacts
        </h5>
        <ul id="artifactTypes">
          {
            props.types.map((type) => {
              return (
                <li
                  key={`artifact-type-${type}`}
                  className="type"
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
        <h5 className="subTitle">
          Hover or Select Countries to Filter Artifacts by Country
        </h5>
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
      </div>
    </div>
  )
}
