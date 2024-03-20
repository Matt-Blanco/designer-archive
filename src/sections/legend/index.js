import { DashedCircle } from "../../components/dashed-circle"
import { colors } from "../../utils"
import { ReactComponent as Time } from "../../assets/year-time.svg"

export function Legend(props) {
  const width = window.innerWidth * 0.25
  const legendDashedCircles = [
    { r: 8, t: "Jan" },
    { r: 22 },
    { r: 36 },
    { r: 46, t: "Dec" }
  ]

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
          Reading Time
        </h5>
        <div id="readingTime">
          <Time />
          <svg
            width={width}
            height={300}
            xmlns="http://www.w3.org/2000/svg"
            id="readingMonths"
          >
            {
              legendDashedCircles.map((cr, i) => {
                const opacity = i === 0 || i === legendDashedCircles.length - 1 ? 1 : 0.25
                const largestRadius = legendDashedCircles[legendDashedCircles.length - 1].r
                const textPadding = 15
                return (
                  <DashedCircle
                    key={`legend-dashed-${i}`}
                    radius={cr.r}
                    fill="none"
                    opacity={opacity}
                    text={cr.t ? cr.t : ""}
                    width={width}
                    x={largestRadius}
                    y={largestRadius + 5}
                    textX={largestRadius}
                    textY={largestRadius + cr.r + textPadding}
                  />
                )
              })
            }
          </svg>
        </div>
      </div>
    </div>
  )
}
