import { XYAxis } from '../XYAxis'
import { getXScale, getYScale } from '../../utils/utils'
import { DataPoint } from 'components/DataPoint'

export type ScatterPlotProps = {
  data: DataPoint[]
  width?: number
  height?: number
  padding?: number
}

export type ScatterPlotSettings = {
  width?: number
  height?: number
  padding?: number
}

export const ScatterPlot = ({ data = [], width, height, padding }: ScatterPlotProps) => {
  const settings: ScatterPlotSettings = {
    width: width || 600,
    height: height || 400,
    padding: padding || 60
  }

  const xScale = getXScale(data, settings)
  const yScale = getYScale(data, settings)

  return (
    <div className="graphContainer">
      <svg width={settings.width} height={settings.height}>
        {data && data.length > 0 ? (
          <g>
            {data.map((datum, index) => {
              return <DataPoint key={index} xScale={xScale} yScale={yScale} datum={datum} />
            })}
          </g>
        ) : null}
        <XYAxis xScale={xScale} yScale={yScale} settings={settings} />
      </svg>
    </div>
  )
}

export default ScatterPlot
