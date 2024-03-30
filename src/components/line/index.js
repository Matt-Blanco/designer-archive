const STYLES = {
  width: 0.5,
  fill: "#ffffff",
  stroke: "black",
}

export function Line(props) {
  return (
    <>
      <line
        fill={props.fill ? props.fill : STYLES.fill}
        stroke={STYLES.stroke}
        strokeWidth={STYLES.width}
        x1={props.x1}
        x2={props.x2}
        y1={props.y1}
        y2={props.y2}
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
