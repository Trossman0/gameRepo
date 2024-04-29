class TextGameObject extends GameObject{
    constructor(text='You Shouldn\'t be seing this', font, fill){
        super()
        this.text = text
        this.font = font
        this.fill = fill
    }

    start(ctx){
        this.addComponent(new ScoreTextUpdater())
        super.start(ctx)
    }
}

window.TextGameObject = TextGameObject