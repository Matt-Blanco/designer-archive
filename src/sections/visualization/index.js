import { useState } from "react"
import { DashedCircle } from "../../components/dashed-circle"
import { ArtifactSummary } from "./artifactSummary"
import { Node } from "./node"
import { Line } from "../../components/line"
import { parametricEquation } from "../../utils"

const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


export function Visualization(props) {
  const width = window.innerWidth * 0.6
  const height = window.innerHeight * 0.95
  const margin = width * 0.05
  const initialRadius = ((width - margin * 2) * 0.055)
  const rings = Object.keys(props.data)
  const largestRadius = initialRadius * rings.length - 1
  const artifactSize = 6
  const [hoverArtifact, updateHover] = useState()
  const boundaries = largestRadius + margin

  const getNodeOpacity = (node) => {
    if (hoverArtifact !== undefined) {
      if (node.name === hoverArtifact.name) {
        return 1
      } else {
        return 0.25
      }
    } 

    if (props.hoverCountry) {
      if (props.hoverCountry === node.country) {
        return 1
      } else {
        return 0.25
      }
    } 

    if (props.selectedCountries.includes(node.country)) {
      return 1
    } else if (props.selectedCountries.length > 0) {
      return 0.25
    }
    return 1;
  }

  return (
    <div id="focusedVisualization">
      <svg width={largestRadius * 2 + margin * 2} height={height}>
        {
          months.map((month, i) => {
            const angle = 30 * (i + 1) - 90
            const tPos = parametricEquation(boundaries, boundaries - (margin / 2), largestRadius + 25, angle)
            const lPos = parametricEquation(boundaries, boundaries - (margin / 2), largestRadius + 20, angle)

            return (
              <Line
                x1={boundaries}
                y1={boundaries - margin / 2}
                x2={lPos[0]}
                y2={lPos[1]}
                opacity={0.25}
                text={month}
                textX={tPos[0]}
                textY={tPos[1]}
              />
            )
          })
        }
        {
          rings.map((year, i) => {
            const radius = ((i + 1) * initialRadius)
            const textY = (((rings.length - i) * initialRadius) - 5) - margin / 2

            return (
              <g
                id="focused"
                key={`ring-${i}`}
              >
                <DashedCircle
                  key={`focues-ring-${i}`}
                  fill={"none"}
                  radius={radius}
                  text={year}
                  textX={boundaries}
                  textY={textY}
                  width={width}
                  x={boundaries}
                  y={boundaries - margin / 2}
                  opacity={0.5}
                />
                {
                  props.data[year].sort((a, b) => a.month - b.month).map((artifact, i, arr) => {
                    return (
                      <Node
                        seed={year + artifact.month + i}
                        r={artifactSize}
                        updateHover={updateHover}
                        cx={boundaries}
                        cy={boundaries - (margin / 2)}
                        ringRadius={radius}
                        artifact={artifact}
                        arr={arr}
                        index={i}
                        opacity={getNodeOpacity(artifact)}
                      />
                    )
                  })
                }
              </g>
            )
          })
        }
      </svg>
      <div id="viewArtifact">
        {
          !hoverArtifact ?
            <p id="emptyHoverText">Hover over a design artifact to view it.</p>
            :
            <ArtifactSummary
              artifact={hoverArtifact}
            />
        }
      </div>
    </div>
  )
}