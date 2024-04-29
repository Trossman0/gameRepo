class Enemy extends GameObject{
    constructor(name = "Enemy"){
        super(name)
    }

    start(ctx){
        this.addComponent(new Rectangle("Red"))
        this.addComponent(new EnemyAI())
        super.start()
    }
}

window.Enemy = Enemy