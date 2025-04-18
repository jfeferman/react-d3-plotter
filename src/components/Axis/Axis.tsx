import { useEffect, createRef } from 'react'
import * as d3 from 'd3'

export type AxisProps = {
  orientation: 'left' | 'bottom'
  scale: () => void
  translate: string
}

export const Axis = ({ orientation, scale, translate }: AxisProps) => {
  const axisContainer = createRef<SVGGElement>()

  useEffect(() => {
    const renderAxis = () => {
      const node = axisContainer.current
      let axis
      if (orientation === 'bottom') {
        axis = d3.axisBottom().ticks(5).scale(scale)
      } else {
        axis = d3.axisLeft().ticks(5).scale(scale)
      }

      d3.select(node).call(axis)
    }

    renderAxis()
  }, [axisContainer, orientation, scale])

  return <g className="axis" ref={axisContainer} transform={translate} />
}
