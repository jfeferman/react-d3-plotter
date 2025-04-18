type DataPointProps = {
  coords: number[]
  xScale: (point: number) => number
  yScale: (point: number) => number
  radius: number
}

export const DataPoint = ({ coords, xScale, yScale, radius }: DataPointProps) => {
  return <circle cx={xScale(coords[0])} cy={yScale(coords[1])} r={radius} key={Math.random() * 1} />
}
