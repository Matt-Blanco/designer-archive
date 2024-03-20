import { useState } from "react"
import { YearSummary } from "./year-summary"

export function BottomVisualization(props) {
  const [hover, updateHover] = useState()

  return (
    <div id="bottomVis">
      {props.years.map((year, i) => {
        return (
          <YearSummary
            key={`bottom-vis-${year}`}
            year={year}
            data={props.data}
            updateHover={updateHover}
            hover={hover}
            updateSelected={props.updateSelected}
          />
        )
      })}
    </div>
  )
}