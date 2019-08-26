import React from 'react'
import './css/Canvas.css'
import Tileset from '../graphic/Tileset'
import { randomInt } from '../tools/random'

const Canvas = (props) => {
  let locations = []
  const canvasRef = React.createRef()

  const groundTileset = new Tileset('/assets/tilesets', 'ground.png', 512, 384, 32, 32)

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = randomInt(1, groundTileset.tileCount)
    const newLocation = { id, x, y }

    locations = [ ...locations, newLocation ]
    ctx.clearRect(0, 0, props.height, props.width)
    locations.forEach(location => groundTileset.drawTile(location.id, ctx, location.x, location.y))
  }

  return (
    <canvas
      ref={ canvasRef }
      width={ props.width }
      height={ props.height }
      onMouseDown={ handleCanvasClick }
    />
  )
}

export default Canvas;
