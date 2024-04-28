class Restarter extends Component{
    update(ctx){
        if(Input.keysDown.includes("KeyR")){
            Engine.currentScene = new MainScene()
            Globals.score = 0
            Camera.main.transform.x = 0
            Camera.main.transform.y = 0
            Camera.main.transform.scaleX = 1
            Camera.main.transform.scaleY = 1
        }
    }
}

window.Restarter = Restarter