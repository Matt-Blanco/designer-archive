import { colors, parametricEquation } from "../../../utils";

export function Node(props) {
  // Calculates the angle for the artifact
  const predictableRng = new Math.seedrandom(props.seed)
  let sectionAngle = predictableRng() * 30
  const angle = 30 * props.artifact.month + sectionAngle - 120

  // calculates the previous month to find the angle to place the artifact along the arc
  const pos = parametricEquation(props.cx, props.cy, props.ringRadius, angle)
  return (
    <circle
      className="artifact"
      key={`artifact-${props.year}-${props.index}`}
      r={props.r}
      fill={colors[props.artifact.type]}
      cx={pos[0]}
      cy={pos[1]}
      onPointerOver={() => props.updateHover(props.artifact)}
      onPointerOut={() => props.updateHover()}
      opacity={props.opacity}
    />
  )
}