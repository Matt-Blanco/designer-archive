export function ArtifactSummary(props) {
  console.log(props.artifact.image)
  const source = require(`./../../../../${props.artifact.image}`);

  return (
    <>
      <img id="artifactSummaryImage" src={source} alt={props.artifact.name} />
      <p id="artifactSummaryText">
        {props.artifact.name}
        <br />
        Obtained in: {props.artifact.city}, {props.artifact.country}
        <br />
        Date Obtained: {props.artifact.month}, {props.artifact.year}
      </p>
    </>
  )
}