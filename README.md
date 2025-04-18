# react-d3-plotter

[![react](https://img.shields.io/badge/built%20with-react-61dafb.svg)](https://reactjs.org/) ![definition types](https://img.shields.io/npm/types/react-d3-plotter.svg)

This library provides wrappers for d3 visualization components, starting with a simple scatter plot. The motivation is to build a more up-to-date library for easy and fast prototyping of data visualization. Contributors are welcome.

## Install

`npm i -S react-d3-plotter`

## Prerequisites

`npm i -S react d3`

## Scatter plot

Pass an array of x,y value pairs to the scatter plot. For instance:

```javascript
const data = [[1,1], [2,10], [5,16]]
```


```javascript
import { ScatterPlot } from 'react-d3-plotter'
...
<ScatterPlot data={data} />
```

### Props

| props | default | type | description |
| - | - | - | - |
| data | `[]` | array | Array of x, y value pairs |
| width | 600 | number | The width of the scatter plot in `px` |
| height | 400 | number | The height of the scatter plot in `px` |
| padding | 60 | number | A padding value in `px` to properly display axis |
| radius | 2 | number | The radius of data points in `px` |
