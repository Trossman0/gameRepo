class ButtonLogic extends Component{
    update(ctx){
        let x = Input.mousePosition.x
        let y = Input.mousePosition.y

        let v2 = new Vector2(x, y)
        let button = new Rectangle2(this.transform.x, this.transform.y, this.transform.scaleX, this.transform.scaleY)
        let collision = CollisionsGeometric.Vector2Rectrangle2Collision(v2, button)
        if(collision && Input.mouseUpThisFrame){
            Engine.currentScene = new MainScene()
        }
    }
}

window.ButtonLogic = ButtonLogic