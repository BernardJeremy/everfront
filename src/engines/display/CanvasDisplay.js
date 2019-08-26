export default class CanvasDisplay {
  constructor(canvasElem, canvasContext, width, height) {
    this.elem = canvasElem
    this.context = canvasContext
    this.width = width
    this.height = height
  }

  clear() {
    this.context.clearRect(0, 0, this.height, this.width)
  }
}
