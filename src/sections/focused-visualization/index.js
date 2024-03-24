import { Visualization } from "./visualization"

export function FocusedVisualization(props) {
  return (
    <Visualization
      data={props.data}
      year={props.year}
    />
  )
}
