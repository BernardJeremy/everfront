import Ressource from './Ressource';

export default class Tileset extends Ressource {
    constructor(url, fileName, width, height, tileWidth, tileHeight) {
        super()
        this.src = `${ url }/${ fileName }`
        this.width = width
        this.height = height
        this.tileWidth = tileWidth
        this.tileHeight = tileHeight
        this.tileLineLength = width / tileWidth
        this.tileColumnLength = height / tileHeight
        this.tileCount = this.tileLineLength * this.tileColumnLength
        this.image = null

        this.loadImage(this.src);
    }

    loadImage(src) {
        this.image = new Image()
        this.image.referenceDuTileset = this
        this.image.onload = () => {
            if(!this.image.complete) {
                throw new Error(`Error loading ${ src }`)
            }
        }
        this.image.src = src
    }

    drawTile(id, xDestination, yDestination) {
        const tileCoordX = id % this.tileLineLength || this.tileLineLength;
        const tileCoordY = Math.ceil(id / this.tileLineLength);
        
        const tilePixelX = (tileCoordX - 1) * this.tileWidth;
        const tilePixelY = (tileCoordY - 1) * this.tileHeight;
        
        this.display.drawImageFromRect(
            this.image,
            xDestination,
            yDestination,
            tilePixelX,
            tilePixelY,
            this.tileWidth,
            this.tileHeight,
        );
    }
}
