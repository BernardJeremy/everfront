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

  drawImage(image, xDestination, yDestination) {
    this.context.drawImage(
      image,
      xDestination,
      yDestination,
    );
  }
  
  drawImageFromRect(image, xDestination, yDestination, tilePixelX, tilePixelY, tileWidth, tileHeight) {
    this.context.drawImage(
      image,
      tilePixelX,
      tilePixelY,
      tileWidth,
      tileHeight,
      xDestination,
      yDestination,
      tileWidth,
      tileHeight
    );
  }

}
