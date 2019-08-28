import Ressource from './Ressource';
import Tileset from './Tileset';

export default class TileMap extends Ressource {
  constructor(src) {
    super()
    this.src = src
    this.jsonMap = null
    this.tileMap = null
    this.tileSet = null

    this.loadMapFile(this.src)
  }

  get loaded() {
    return !!this.tileMap && !!this.tileSet.loaded
  }

  loadMapFile(src) {
    return fetch(src)
      .then(response => response.json())
      .then(data => {
        this.tileMap = data.map
        this.tileSet = new Tileset(
          data.tileset.src,
          data.tileset.width,
          data.tileset.height,
          data.tileset.tileWidth,
          data.tileset.tileHeight
        )
      })
      .catch(err => {
        console.error(`Unable to load JSON map from ${ src }: ${ err }`)
      })
  }

  drawMap() {
    if (!this.loaded) {
      return;
    }
    this.tileMap.forEach((line, lineIndex)=> {
      const yDestination = lineIndex * this.tileSet.tileHeight
      line.forEach((tileId, collumnIndex) => {
        const xDestination = collumnIndex * this.tileSet.tileWidth
        if (Array.isArray(tileId)) {
          tileId.forEach(subTileId => {
            this.tileSet.drawTile(subTileId, xDestination, yDestination)            
          });
        } else {
          this.tileSet.drawTile(tileId, xDestination, yDestination)
        }
      });
    });
  }
}
