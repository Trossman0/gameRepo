class TextGameObject extends GameObject{

    start(ctx){
        this.addComponent(new ScoreTextUpdater())
        this.layer = 5
        super.start(ctx)
    }
}

window.TextGameObject = TextGameObject