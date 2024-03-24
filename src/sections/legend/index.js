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
          From {props.filterCountry ? props.filterCountry : ""}
        </h5>
        <div id="readingTime">
          <Map
            updateHoverCountry={props.updateHover}
          />
        </div>
      </div>
    </div>
  )
}
