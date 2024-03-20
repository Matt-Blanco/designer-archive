const STYLES = {
  width: 1,
  fill: "#ffffff",
  stroke: "black",
  dashedArray: "10, 5"
}

export function DashedCircle(props) {
  return (
    <>
      <circle
        r={props.radius}
        fill={props.fill ? props.fill : STYLES.fill}
        stroke={STYLES.stroke}
        strokeWidth={STYLES.width}
        strokeDasharray={STYLES.dashedArray}
        cx={props.x}
        cy={props.y}
        opacity={props.opacity ? props.opacity : 1}
      />
      {
        props.text && (
          <text
            textAnchor="middle"
            fontSize={10}
            x={props.textX}
            y={props.textY}>
              { props.text }
            </text>
        )
      }
    </>
  )
}
