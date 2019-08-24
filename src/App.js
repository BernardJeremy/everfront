import React, { useState, useRef, useEffect } from 'react'
import './css/App.css'
import Tileset from './graphic/Tileset'
import { randomInt } from './tools/random'

const groundTileset = new Tileset('/assets/tilesets', 'ground.png', 512, 384, 32, 32)

function App() {
  const [ locations, setLocations ] = useState([])
  const canvasRef = useRef(null)
  const canvaSize = {
    width: 1380,
    height: 780,
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvaSize.height, canvaSize.width)
    locations.forEach(location => groundTileset.drawTile(location.id, ctx, location.x, location.y))
  })
  
  function handleCanvasClick(e) {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = randomInt(1, groundTileset.tileCount)
    const newLocation = { id, x, y }
    setLocations([ ...locations, newLocation ])
  }

  return (
    <>
      <canvas
        ref={ canvasRef }
        width={ canvaSize.width }
        height={ canvaSize.height }
        onClick={ handleCanvasClick }
      />
    </>
  )
}

export default App;
