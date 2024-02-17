function CircleProgressbar({ percentage, circleWidth }) {
  const radius = 85;
  const dashArray = radius * Math.PI;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  let color = "";
  if (percentage <= 27) {
    color = "rgb(245, 54, 86)";
  } else if (percentage <= 52) {
    color = "rgb(21, 117, 21)";
  } else {
    color = "rgb(239, 180, 70)";
  }

  const rotation = -90 + (percentage / 100) * 360;
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${circleWidth / 2}px ${circleWidth / 2}px`,
          }}
          //   transform={`rotate(90 ${circleWidth / 2} ${circleWidth / 2})`}
          //   transform={`rotate(${rotation} ${circleWidth / 2} ${
          //     circleWidth / 2
          //   })`}
          stroke={color}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default CircleProgressbar;
