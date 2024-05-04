class CameraMover extends Component{
    constructor(){
        super()
    }
    
    start(ctx){
        this.player = Engine.currentScene.gameObjects.find(go=>go.name=="Player")
        Camera.main.transform.x = -Engine.currentScene.logicalWidthViewWidthInPixels/4
        Camera.main.transform.y = -Engine.currentScene.logicalWidthViewHeightInPixels/4
        Camera.main.transform.scaleX = 1
        Camera.main.transform.scaleY = 1
    }

    update(ctx){
        let deltaX = this.player.transform.x - this.player.transform.prev_x
        let deltaY = this.player.transform.prev_y - this.player.transform.y

        let logicalWidth = Engine.currentScene.logicalWidth
        let logicalHeight = logicalWidth / Engine.currentScene.aRatio
        Camera.main.transform.x += (deltaX * logicalWidth / Engine.currentScene.logicalWidthViewWidthInPixels)/10
        Camera.main.transform.y -= (deltaY * logicalHeight / Engine.currentScene.logicalWidthViewHeightInPixels)/10
    }
}

window.CameraMover = CameraMover