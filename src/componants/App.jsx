import React from 'react'
import './css/App.css'
import Canvas from './Canvas';

const canvaSize = {
  width: 1380,
  height: 780,
}

const App = () =>
  <Canvas
    width={ canvaSize.width }
    height={ canvaSize.height }
  />

export default App;
