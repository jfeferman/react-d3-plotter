import { DataPoint } from '../DataPoint'

export type DataAgreggateProps = {
  data: number[][]
  xScale: () => number
  yScale: () => number
  radius: number
}

export const DataAgreggate = ({ data, xScale, yScale, radius }: DataAgreggateProps) => {
  const createDataPoint = (coords: number[], index: number) => {
    return <DataPoint key={index} xScale={xScale} yScale={yScale} coords={coords} radius={radius} />
  }

  return (
    <>
      {data && data.length > 0 ? (
        <g>
          {data.map((d, i) => {
            return createDataPoint(d, i)
          })}
        </g>
      ) : null}
    </>
  )
}
