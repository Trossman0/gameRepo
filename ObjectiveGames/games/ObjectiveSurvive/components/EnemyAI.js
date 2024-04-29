class EnemyAI extends Component{
    constructor(){
        super()
    }

    start(ctx){
        this.player = Engine.currentScene.gameObjects.find(go=>go.name=="Player")
        this.xSpeed = .2
        this.ySpeed = .2
        this.maxVelocity = 20
    }

    update(ctx){
        if(this.transform.x <= this.player.transform.x){
            if(this.transform.xVelocity > 0){
                this.transform.xVelocity /= 1.05
                this.transform.xVelocity += this.xSpeed
            }
            else if(Math.abs(this.transform.xVelocity) < this.maxVelocity){
                this.transform.xVelocity += this.xSpeed
            }
        }
        else{
            if(this.transform.xVelocity < 0){
                this.transform.xVelocity /= 1.05
                this.transform.xVelocity -= this.xSpeed
            }
            else if(Math.abs(this.transform.xVelocity) < this.maxVelocity){
                this.transform.xVelocity -= this.xSpeed
            }
        }
        if(this.transform.y <= this.player.transform.y){
            if(this.transform.yVelocity < 0){
                this.transform.yVelocity /= 1.05
                this.transform.yVelocity += this.ySpeed
            }
            else if(this.transform.yVelocity < this.maxVelocity){
                this.transform.yVelocity += this.ySpeed
            }
        }
        else{
            if(this.transform.yVelocity > 0){
                this.transform.yVelocity /= 1.05
                this.transform.yVelocity -= this.ySpeed
            }
            else if(this.transform.yVelocity < this.maxVelocity){
                this.transform.yVelocity -= this.ySpeed
            }
        }
        this.transform.x += this.transform.xVelocity
        this.transform.y += this.transform.yVelocity

        let player = new Rectangle2(this.player.transform.x, this.player.transform.y, this.player.transform.scaleX, this.player.transform.scaleY)
        let enemy = new Rectangle2(this.transform.x, this.transform.y, this.transform.scaleX, this.transform.scaleY)
        let collision = CollisionsGeometric.Rectangle2Rectangle2Collision(enemy, player)
        if(collision){
            EventSystem.fireEvent({name: "Death", source: this, dest: "PlayerController"})
        }
        
    }
}

window.EnemyAI = EnemyAI