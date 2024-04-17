import { colors } from "../../../utils";

export function ArtifactSummary(props) {
  const source = require(`./../../../${props.artifact.image}`);

  return (
    <>
      <img id="artifactSummaryImage" src={source} alt={props.artifact.name} />
      <p id="artifactSummaryText">
        {props.artifact.name}
        <br />
        <div id="summaryType"><span>{props.artifact.type} </span> <div className="artifact" style={{ backgroundColor: colors[props.artifact.type] }}></div></div>
        {props.artifact.city}, {props.artifact.country}
        <br />
        {props.artifact.month} / {props.artifact.year}
      </p>
    </>
  )
}