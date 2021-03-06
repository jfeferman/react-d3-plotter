import React from 'react'
import { DataPointProps } from './types'

const DataPoint: React.SFC<DataPointProps> = (props) => {
  const {
    coords,
    xScale,
    yScale,
    radius,
  } = props

  return (
    <circle
      cx={xScale(coords[0])}
      cy={yScale(coords[1])}
      r={radius}
      key={Math.random() * 1}
    />
  )
}

export default DataPoint
