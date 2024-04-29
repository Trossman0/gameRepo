class Player extends GameObject{
    constructor(name = "Player"){
        super(name)
    }
    start(ctx){
        this.addComponent(new Rectangle("Green"))
        this.addComponent(new PlayerController())
        this.time_to_live = 10_000
        this.transform.prev_x = this.transform.x
        this.transform.prev_y = this.transform.y
        super.start()
    }
}

window.Player = Player