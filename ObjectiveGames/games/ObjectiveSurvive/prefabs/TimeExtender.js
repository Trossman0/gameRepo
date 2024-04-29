class TimeExtender extends GameObject{
    constructor(){
        super()
    }
    start(ctx){
        this.addComponent(new Rectangle('yellow'))
        this.addComponent(new TimeExtenderComponent())
        super.start(ctx)
    }
}

window.TimeExtender = TimeExtender