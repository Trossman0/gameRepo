class PlayerController extends Component{
    constructor(){
        super()
    }
    start(ctx){
        EventSystem.registerListener(this)
        this.xspeed = .2
        this.yspeed = .2
        this.moving = false
        this.maxVelocity = 20
        this.boost_time = 1500
    }
    
    handleEvent(event){
        if(event.dest == "PlayerController"){
            if(event.name == "Time Extention"){
                this.parent.time_to_live += 2000
            }
            else if(event.name == "Death"){
                Engine.currentScene = new DeadScene("You were Touched")
            }
        }
    }

    update(ctx) {
        this.xMoving = false
        this.yMoving = false
        if ((Input.keysDown.includes("ShiftLeft") || Input.keysDown.includes("ShiftRight")) && this.boost_time > 0) {
            this.xspeed = .4
            this.yspeed = .4
            this.maxVelocity = 40
            if (this.boost_time > 0) {
                this.boost_time -= 20
                this.parent.boost_size -= 2
            }
        }
        if ((!Input.keysDown.includes("ShiftLeft") && !Input.keysDown.includes("ShiftRight")) || this.boost_time <= 0) {
            this.xspeed = .2
            this.yspeed = .2
            this.maxVelocity = 20
        }
        if (this.boost_time < 1000 && !(Input.keysDown.includes("ShiftLeft") || Input.keysDown.includes("ShiftRight"))) {
            if (this.boost_time <= 1000) {
                this.boost_time += 5
                this.parent.boost_size += .5
            }
            else if (this.boost_time > 1000) {
                this.boost_time = 1000
                this.parent.boost_size = 100
            }
        }
        if((Input.keysDown.includes("KeyA") && Input.keysDown.includes("KeyD")) || (Input.keysDown.includes("ArrowRight") && Input.keysDown.includes("ArrowLeft"))){
            this.xMoving = false
        }
        else if (Input.keysDown.includes("KeyA") || Input.keysDown.includes("ArrowLeft")) {
            if(this.transform.xVelocity > 0){
                this.transform.xVelocity /= 1.05
                this.transform.xVelocity -= this.xspeed
            }
            else if(Math.abs(this.transform.xVelocity) < this.maxVelocity){
                this.transform.xVelocity -= this.xspeed
            }
            this.xMoving = true
        }
        else if (Input.keysDown.includes("KeyD") || Input.keysDown.includes("ArrowRight")) {
            if(this.transform.xVelocity < 0){
                this.transform.xVelocity /= 1.05
                this.transform.xVelocity += this.xspeed
            }
            else if(this.transform.xVelocity < this.maxVelocity){
                this.transform.xVelocity += this.xspeed
            }
            this.xMoving = true
        }
        if((Input.keysDown.includes("KeyW") && Input.keysDown.includes("KeyS")) || (Input.keysDown.includes("ArrowUp") && Input.keysDown.includes("ArrowDown"))){
            this.yMoving = false
        }
        else if (Input.keysDown.includes("KeyW") || Input.keysDown.includes("ArrowUp")) {
            if(this.transform.yVelocity > 0){
                this.transform.yVelocity /= 1.05
                this.transform.yVelocity -= this.yspeed
            }
            else if(Math.abs(this.transform.yVelocity) < this.maxVelocity){
                this.transform.yVelocity -= this.yspeed
            }
            this.yMoving = true
        }
        else if (Input.keysDown.includes("KeyS") || Input.keysDown.includes("ArrowDown")) {
            if(this.transform.yVelocity < 0){
                this.transform.yVelocity /= 1.05
                this.transform.yVelocity += this.yspeed
            }
            else if(Math.abs(this.transform.yVelocity) < this.maxVelocity){
                this.transform.yVelocity += this.yspeed
            }
            this.yMoving = true
        }
    
        
        if(this.xMoving){
            if (this.transform.xVelocity > this.maxVelocity + 1){
                this.transform.xVelocity /= 1.05
            }
            else if(this.transform.xVelocity > this.maxVelocity){
                this.transform.xVelocity = this.maxVelocity
            }
            this.transform.x += this.transform.xVelocity
        }
        else{
            this.transform.xVelocity /= 1.05
            if(Math.abs(this.transform.xVelocity) < .1){
                this.transform.xVelocity = 0
            }
            this.transform.x += this.transform.xVelocity
        }
        if(this.yMoving){
            if(this.transform.yVelocity > this.maxVelocity + 1){
                this.transform.yVelocity /= 1.05
            }
            else if (this.transform.yVelocity > this.maxVelocity){
                this.transform.yVelocity = this.maxVelocity
            }
            this.transform.y += this.transform.yVelocity
        }
        else{
            this.transform.yVelocity /= 1.05
            if(Math.abs(this.transform.yVelocity) < .1){
                this.transform.yVelocity = 0
            }
            this.transform.y += this.transform.yVelocity
        }
        this.parent.time_to_live -= Time.ms
        if (this.parent.time_to_live <= 0) {
            Camera.main.transform.x = 0
            Camera.main.transform.y = 0
            Engine.currentScene = new DeadScene("Player Timed Out")
        }
    }
}

window.PlayerController = PlayerController