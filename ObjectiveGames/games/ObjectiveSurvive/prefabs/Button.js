class Button extends GameObject{
    constructor(name = "Button"){
        super(name)
    }

    start(ctx){
        this.addComponent(new ButtonLogic)
        this.addComponent(new Rectangle("Green"))
        super.start()
    }
}

window.Button = Button