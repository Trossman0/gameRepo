class StaticTextGameObject extends GameObject{
    constructor(text = 'You are not supposed to see this', font='30px Garamond', fill="gray", align='left'){
        super()
        this.text = text
        this.font = font
        this.fill = fill
        this.align = align
    }

    start(ctx){
        this.addComponent(new Text(this.text, this.font, this.fill, this.align))
        super.start()
    }
}

window.StaticTextGameObject = StaticTextGameObject