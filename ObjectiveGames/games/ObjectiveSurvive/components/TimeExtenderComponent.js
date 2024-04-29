class TimeExtenderComponent extends Component{
    start(ctx){
        this.time = 1000
        this.player = Engine.currentScene.gameObjects.find(go=>go.name=="Player")
    }

    update(ctx){
        let player = new Rectangle2(this.player.transform.x, this.player.transform.y, this.player.transform.scaleX, this.player.transform.scaleY)
        let timeE = new Rectangle2(this.transform.x, this.transform.y, this.transform.scaleX, this.transform.scaleY)
        let collision = CollisionsGeometric.Rectangle2Rectangle2Collision(timeE, player)
        if(collision){
            EventSystem.fireEvent({name: "Time Extention", source: this, dest: "PlayerController"})
            this.transform.x = Math.floor(Math.random() * (ctx.canvas.width - 50))
            this.transform.y = Math.floor(Math.random() * (ctx.canvas.height - 50))
        }
    }
}

window.TimeExtenderComponent = TimeExtenderComponent