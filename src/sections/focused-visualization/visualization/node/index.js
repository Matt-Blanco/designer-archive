import { colors, parametricEquation } from "../../../../utils";

export function Node(props) {
  // Calculates the angle for the artifact
  let sectionAngle = 0
  for (let j = props.index - 1; j >= 0; j--) {
    if (props.arr[j].month !== props.artifact.month) {
      break;
    } else {
      sectionAngle += 8
    }
  }
  const angle = ((30 * props.artifact.month - 1) + sectionAngle) - 110

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
    />
  )
}