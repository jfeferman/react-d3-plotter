import * as d3 from 'd3'
import { ScatterPlotSettings } from 'components/ScatterPlot'
import { DataPoint } from 'components/DataPoint'

export const getXScale = (data: DataPoint[], settings: ScatterPlotSettings) => {
  const xMax = d3.max(data, (d: DataPoint) => d.x)
  return d3
    .scaleLinear()
    .domain([0, xMax])
    .rangeRound([settings.padding, settings.width! - settings.padding! * 2])
}

/**
 * Determine the y scale
 * @param data The data set
 * @param settings Plot settings
 */
export const getYScale = (data: DataPoint[], settings: ScatterPlotSettings) => {
  const yMax = d3.max(data, (d: DataPoint) => d.y)
  return d3
    .scaleLinear()
    .domain([0, yMax])
    .rangeRound([settings.height! - settings.padding!, settings.padding])
}
