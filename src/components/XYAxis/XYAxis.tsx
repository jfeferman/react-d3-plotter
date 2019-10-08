import React from 'react'
import Axis from '../Axis'
import { XYAxisProps } from './types'

const XYAxis: React.SFC<XYAxisProps> = (props) => {
  const {
    height,
    padding,
    xScale,
    yScale,
  } = props

  return (
    <g className="xy-axis">
      <Axis
        translate={`translate(0, ${height - padding})`}
        scale={xScale}
        orient="bottom"
      />
      <Axis
        translate={`translate(${padding}, 0)`}
        scale={yScale}
        orient="left"
      />
    </g>
  )
}

export default XYAxis
