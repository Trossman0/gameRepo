class CameraMover extends Component{
    constructor(){
        super()
    }
    
    start(ctx){
        this.player = Engine.currentScene.gameObjects.find(go=>go.name=="Player")
        Camera.main.transform.x = 0
        Camera.main.transform.y = 0
        Camera.main.transform.scaleX = 1
        Camera.main.transform.scaleY = 1
    }

    update(ctx){
        let scene = Engine.currentScene
        let logicalWidthNoZoom = scene.logicalWidth
        let logicalHeightNoZoom = logicalWidthNoZoom/scene.aRatio
        let screenXWOLetterBoxing = Input.mousePosition.x
        let screenYWOLetterBoxing = Input.mousePosition.y
        let screenXWithLetterBoxing = screenXWOLetterBoxing - scene.letterBox1End
        let screenYWithLetterBoxing = screenYWOLetterBoxing
        let cameraXAsPercent = screenXWithLetterBoxing/scene.logicalWidthViewWidthInPixels
        let cameraYAsPercent = screenYWithLetterBoxing/scene.logicalWidthViewHeightInPixels

        let deltaX = this.player.transform.x - this.player.transform.prev_x
        let deltaY = this.player.transform.y - this.player.transform.prev_y

        let logicalWidth = Engine.currentScene.logicalWidth
        let logicalHeight = logicalWidth / Engine.currentScene.aRatio

        Camera.main.transform.x += (deltaX * logicalWidth / Engine.currentScene.logicalWidthViewWidthInPixels) / 10
        Camera.main.transform.y += (deltaY * logicalHeight / Engine.currentScene.logicalWidthViewHeightInPixels) / 10
    }
}

window.CameraMover = CameraMover