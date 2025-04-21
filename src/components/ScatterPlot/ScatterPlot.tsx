import { XYAxis } from '../XYAxis'
import { getXScale, getYScale } from '../../utils/utils'
import { DataPoint } from 'components/DataPoint'

export type ScatterPlotSettings = {
  width?: number
  height?: number
  padding?: number
  xAxisLabel?: string
  yAxisLabel?: string
  title?: string
}

export const ScatterPlot = ({ data = [], config }: { data: DataPoint[]; config: ScatterPlotSettings }) => {
  const { width, height, padding, xAxisLabel, yAxisLabel, title } = config
  const settings = {
    width: width || 600,
    height: height || 400,
    padding: padding || 60
  }

  const xScale = getXScale(data, settings)
  const yScale = getYScale(data, settings)

  return (
    <div className="graphContainer">
      <svg width={settings.width} height={settings.height}>
        {title && (
          <text className="graph-title" x={settings.width / 2} y={20} textAnchor="middle" fontSize="16" fontWeight="bold">
            {title}
          </text>
        )}
        {data && data.length > 0 ? (
          <g>
            {data.map((datum, index) => {
              return <DataPoint key={index} xScale={xScale} yScale={yScale} datum={datum} />
            })}
          </g>
        ) : null}
        <XYAxis xScale={xScale} yScale={yScale} settings={config} />

        {/* X Axis Label */}
        {xAxisLabel && (
          <text className="x-axis-label" x={settings.width / 2} y={settings.height - 10} textAnchor="middle" fontSize="12">
            {xAxisLabel}
          </text>
        )}

        {/* Y Axis Label */}
        {yAxisLabel && (
          <text
            className="y-axis-label"
            x={-settings.height / 2}
            y={15}
            transform="rotate(-90)"
            textAnchor="middle"
            fontSize="12"
          >
            {yAxisLabel}
          </text>
        )}
      </svg>
    </div>
  )
}

export default ScatterPlot
