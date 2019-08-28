import Animation from '../display/Animation';
import TileMap from '../graphic/TileMap';

export default class GameLoop {
  constructor(display) {
    this.display = display
    this.assets = {
      groundMap: new TileMap('/assets/tilemaps/arena.json')
    }
    this.clickedLocations = []
    Animation.requestAnimFrame()(this.main.bind(this))
  }

  mouseInputHandler(clickType, targetX, targetY) {
    return true;
  }
  
  render() {
    this.assets.groundMap.drawMap()  
  }
  
  main() {
    this.render()
    
    Animation.requestAnimFrame()(this.main.bind(this))
    
    return true
  }
}
