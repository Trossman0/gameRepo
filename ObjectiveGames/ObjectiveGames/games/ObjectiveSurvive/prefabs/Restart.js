class Restart extends GameObject{
    constructor(){
        super()
    }
    start(ctx){
        this.addComponent(new Restarter())
        super.start(ctx)
    }
}

window.Restart = Restart