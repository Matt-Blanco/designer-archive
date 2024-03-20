import { DashedCircle } from "../../../components/dashed-circle";
import { colors, parametricEquation } from "../../../utils";

const radius = 60
const width = radius * 2 + 60 // the 10 is extra padding
const itemSize = 4

export function YearSummary(props) {
  const isHover = props.hover === undefined || props.hover === props.year
  const getOpacity = () => isHover ? 1 : 0.25

  return (
    <svg
      width={width}
    >
      <g
        className="summary"
        onPointerOver={() => props.updateHover(props.year)}
        onPointerOut={() => props.updateHover()}
        onPointerDown={() => props.updateSelected(props.year)}
        style={{opacity: getOpacity()}}
      >
        <DashedCircle
          key={`bottom-vis-${props.year}`}
          radius={radius}
          text={props.year}
          width={width}
          x={radius + 30}
          y={radius + 10}
          textX={radius + 30}
          textY={radius + 15}
        />
        {
          props.data[props.year].sort((a, b) => a.month - b.month).map((item, i, arr) => {
            // Calculates the angle for the artifact
            let angle = (25 * item.month)
            let sectionAngle = 0
            for (let j = i - 1; j >= 0; j--) {
              if (arr[j].month !== item.month) {
                break;
              } else {
                sectionAngle += 8
              }
            }
            angle += sectionAngle

            // calculates the previous month to find the angle to place the artifact along the arc
            const pos = parametricEquation((radius + 30), (radius + 10), radius, angle)
            return (
              <circle
                key={`item-${props.year}-${i}`}
                r={itemSize}
                fill={colors[item.type]}
                cx={pos[0]}
                cy={pos[1]}
              />
            )
          })
        }
      </g>
    </svg>
  )
}