class Controller extends GameObject{
    constructor(name="Controller"){
        super(name)
    }

    start(ctx){
        this.addComponent(new CameraMover())
        this.addComponent(new EnemySpawner())
    }
}

window.Controller = Controller