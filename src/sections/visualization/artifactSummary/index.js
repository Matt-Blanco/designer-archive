import { CSSTransition } from "react-transition-group";
import { colors } from "../../../utils";
import { useRef } from "react";

export function ArtifactSummary(props) {
  const source = props.artifact ? require(`./../../../${props.artifact.image}`) : ""
  const name = props.artifact ? props.artifact.name : ""
  const type = props.artifact ? props.artifact.type : ""
  const nodeRef = useRef(null);

  const location = props.artifact ?  `${props.artifact.city}, ${props.artifact.country}` : ''
  const date = props.artifact ? `${props.artifact.month} / ${props.artifact.year}` : '' 

  return (
    <CSSTransition
      in={props.artifact !== undefined}
      timeout={250}
      classNames="tooltip"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
      >
        <img id="artifactSummaryImage" src={source} alt={ name } />
        <div id="artifactSummaryText">
          { name }
          <br />
          <div id="summaryType">
            <div className="artifact" style={{ backgroundColor: colors[type] }}></div>
            <span>{ type } </span>
          </div>
          { location }
          <br />
          { date }
        </div>
      </div>
    </CSSTransition>
  )
}