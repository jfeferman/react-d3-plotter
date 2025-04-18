import * as d3 from 'd3'
import { ScatterPlotSettings } from 'components/ScatterPlot'

/**
 * Determine the x scale
 * @param data The data set
 * @param settings Plot settings
 */
export const getXScale = (data: number[][], settings: ScatterPlotSettings) => {
  const xMax = d3.max(data, (d: number[]) => d[0])
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
export const getYScale = (data: number[][], settings: ScatterPlotSettings) => {
  const yMax = d3.max(data, (d: number[]) => d[1])
  return d3
    .scaleLinear()
    .domain([0, yMax])
    .rangeRound([settings.height! - settings.padding!, settings.padding])
}
