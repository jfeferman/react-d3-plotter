import React from 'react'
import { Axis } from '../Axis'
import { ScatterPlotSettings } from 'components/ScatterPlot'

export type XYAxisProps = {
  xScale: () => number
  yScale: () => number
  settings: ScatterPlotSettings
}

export const XYAxis = ({ xScale, yScale, settings }: XYAxisProps) => {
  const { height, padding } = settings

  return (
    <g className="xy-axis">
      <Axis translate={`translate(0, ${height! - padding!})`} scale={xScale} orientation="bottom" />
      <Axis translate={`translate(${padding}, 0)`} scale={yScale} orientation="left" />
    </g>
  )
}

export default XYAxis
