import Tileset from '../graphic/Tileset'
import { randomInt } from '../../tools/random'
import Animation from '../display/Animation';

export default class GameLoop {
  constructor(display) {
    this.display = display
    this.assets = {
      groundTileset: new Tileset('/assets/tilesets', 'ground.png', 512, 384, 32, 32)
    }
    this.clickedLocations = []
    Animation.requestAnimFrame()(this.main.bind(this))
  }

  mouseInputHandler(clickType, targetX, targetY) {
    const id = randomInt(1, this.assets.groundTileset.tileCount)
    const newLocation = { id, x: targetX, y: targetY }
  
    this.clickedLocations = [ 
      ...this.clickedLocations.map((location) => Object.assign({}, location, { id: randomInt(1, this.assets.groundTileset.tileCount) })),
      newLocation
    ]
  }
  
  render() {
    this.display.clear()
    this.clickedLocations.forEach(location => this.assets.groundTileset.drawTile(location.id, this.display.context, location.x, location.y))
  }
  
  main() {
    this.render()
    
    Animation.requestAnimFrame()(this.main.bind(this))
    
    return true
  }
}
