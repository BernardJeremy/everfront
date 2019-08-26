import React from 'react'
import './css/Canvas.css'
import CanvasDisplay from '../engines/display/CanvasDisplay'
import GameLoop from '../engines/game/GameLoop';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef()
    this.canvas = null
    this.context = null
    this.display = null
    this.gameLoop = null
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current
    this.context = this.canvas.getContext('2d')
    this.display = new CanvasDisplay(this.canvas, this.context, this.props.width, this.props.height)
    this.gameLoop = new GameLoop(this.display)
  }

  render() {

    const handleCanvasClick = (e) => {
      const rect = this.canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      this.gameLoop.mouseInputHandler(e.buttons, x, y)
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
