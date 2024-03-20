import { EmptyView } from "./empty-view"
import { Visualization } from "./visualization"

export function FocusedVisualization(props) {
  return (
    <div id="focusedVis">
      {
        props.data.length === 0 ? <EmptyView />
          :
          <Visualization 
            data={props.data}
            year={props.year}
          />
      }
    </div>
  )
}
