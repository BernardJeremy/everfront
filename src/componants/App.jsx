import React from 'react'
import './css/App.css'
import Canvas from './Canvas';

const canvaSize = {
  width: 28 * 32,
  height: 18 * 32,
}

const App = () =>
  <Canvas
    width={ canvaSize.width }
    height={ canvaSize.height }
  />

export default App;
