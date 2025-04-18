import React from 'react'
import { XYAxis } from '../XYAxis'
import { DataAgreggate } from '../DataAgreggate'
import { getXScale, getYScale } from '../../utils/utils'

export type ScatterPlotProps = {
  data: number[][]
  width?: number
  height?: number
  padding?: number
  radius: number
}

export type ScatterPlotSettings = {
  width?: number
  height?: number
  padding?: number
  radius?: number
}

export const ScatterPlot = ({ data = [], width, height, padding, radius = 2 }: ScatterPlotProps) => {
  const settings: ScatterPlotSettings = {
    width: width || 600,
    height: height || 400,
    padding: padding || 60,
    radius: radius || 2
  }

  const xScale = getXScale(data, settings)
  const yScale = getYScale(data, settings)

  return (
    <div className="graphContainer">
      <svg width={settings.width} height={settings.height}>
        <DataAgreggate xScale={xScale} yScale={yScale} data={data} {...settings} radius={radius} />
        <XYAxis xScale={xScale} yScale={yScale} settings={settings} />
      </svg>
    </div>
  )
}

export default ScatterPlot
