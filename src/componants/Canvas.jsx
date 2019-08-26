import React from 'react'
import './css/Canvas.css'
import Tileset from '../graphic/Tileset'
import { randomInt } from '../tools/random'

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef()
    this.canvas = null
    this.context = null
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current
    this.context = this.canvas.getContext('2d')
  }

  render() {
    let locations = []

    const groundTileset = new Tileset('/assets/tilesets', 'ground.png', 512, 384, 32, 32)

    const handleCanvasClick = (e) => {
      const rect = this.canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = randomInt(1, groundTileset.tileCount)
      const newLocation = { id, x, y }

      locations = [ ...locations, newLocation ]
      this.context.clearRect(0, 0, this.props.height, this.props.width)
      locations.forEach(location => groundTileset.drawTile(location.id, this.context, location.x, location.y))
    }

    return (
      <canvas
        ref={ this.canvasRef }
        width={ this.props.width }
        height={ this.props.height }
        onMouseDown={ handleCanvasClick }
      />
    )
  }
}

export default Canvas;
