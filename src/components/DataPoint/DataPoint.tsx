type DataPointProps = {
  datum: DataPoint
  xScale: (point: number) => number
  yScale: (point: number) => number
}

export type DataPoint = {
  x: number
  y: number
  radius?: number
  fill?: string
}

// TODO: exchange math random with uuid generator
export const DataPoint = ({ datum, xScale, yScale }: DataPointProps) => {
  return (
    <circle
      key={Math.random() * 1}
      cx={xScale(datum.x)}
      cy={yScale(datum.y)}
      r={datum.radius ?? 2}
      fill={datum.fill ?? 'black'}
    />
  )
}
