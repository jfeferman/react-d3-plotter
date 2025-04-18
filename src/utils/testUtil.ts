import * as d3 from 'd3'

/**
 * Mock scatter plot data, settings, and functions
 */

export const mockData = [
  [17.58212046, 25200.85],
  [0.33767329, 503.22]
]

const settings = {
  width: 600,
  height: 400,
  padding: 60
}

export const getXScale = () => {
  const xMax = d3.max(mockData, (d: Array<number>) => d[0])
  return d3
    .scaleLinear()
    .domain([0, xMax])
    .rangeRound([settings.padding, settings.width - settings.padding * 2])
}

export const getYScale = () => {
  const yMax = d3.max(mockData, (d: Array<number>) => d[1])
  return d3
    .scaleLinear()
    .domain([0, yMax])
    .rangeRound([settings.height - settings.padding, settings.padding])
}
