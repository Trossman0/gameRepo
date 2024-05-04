class Enemy extends GameObject{
    constructor(name = "Enemy"){
        super(name)
    }

    start(ctx){
        this.access = new Rectangle('Red')
        this.addComponent(this.access)
        this.addComponent(new EnemyAI())
        super.start()
    }
}

window.Enemy = Enemy