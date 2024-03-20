import { colors, parametricEquation } from "../../../../utils";

export function Node(props) {
  // Calculates the angle for the artifact
  let angle = 30
  for (let j = props.index - 1; j >= 0; j--) {
    if (props.arr[j].month !== props.item.month) {
      break;
    } else {
      angle += 33
    }
  }

  // calculates the previous month to find the angle to place the artifact along the arc
  const pos = parametricEquation(props.width / 3, props.largestRadius + 10, props.value, angle)

  return (
    <circle
      className="artifact"
      key={`item-${props.year}-${props.index}`}
      r={props.artifactSize}
      fill={colors[props.item.type]}
      cx={pos[0]}
      cy={pos[1]}
      onPointerOver={() => props.updateHover(props.item)}
      onPointerOut={() => props.updateHover()}
    />
  )
}