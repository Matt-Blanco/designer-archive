import { useState } from "react"
import { DashedCircle } from "../../../components/dashed-circle"
import { Node } from "./node"
import { ArtifactSummary } from "./artifactSummary"


export function Visualization(props) {
  const width = window.innerWidth * 0.6
  const height = window.innerHeight * 0.75
  const initialRadius = (width * 0.05) / 2
  const rings = Array(12).fill(0).map((v, i) => initialRadius + (i * initialRadius))
  const artifactSize = 6
  const [hoverArtifact, updateHover] = useState()

  return (
    <>
      <svg width={width * 0.75} height={height}>
        {
          rings.map((v, i, arr) => {
            const largestRadius = arr[arr.length - 1]
            const artifactsPerMonth = props.data.filter(artifact => artifact.month === i + 1)

            return (
              <g
                id="focused"
                key={`ring-${i}`}
              >
                {
                  i === 0 ?
                    <DashedCircle
                      key={`focues-ring-${i}`}
                      fill={"none"}
                      radius={v}
                      text={props.year}
                      textX={width / 3}
                      textY={largestRadius + 15}
                      width={width}
                      x={width / 3}
                      y={largestRadius + 10}
                    />
                    :
                    <DashedCircle
                      key={`focues-ring-${i}`}
                      fill={"none"}
                      radius={v}
                      text={props.year}
                      width={width}
                      x={width / 3}
                      y={largestRadius + 10}
                    />
                }
                {
                  artifactsPerMonth.map((item, i, arr) => {
                    return (
                      <Node
                        key={`item-${props.year}-${i}`}
                        index={i}
                        item={item}
                        value={v}
                        arr={arr}
                        width={width}
                        artifactSize={artifactSize}
                        year={props.year}
                        largestRadius={largestRadius}
                        updateHover={updateHover}
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
    </>
  )
}