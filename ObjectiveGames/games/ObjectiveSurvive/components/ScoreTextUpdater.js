class ScoreTextUpdater extends Component{
    constructor(){
        super()
    }

    update(ctx){
        Globals.score++
        this.parent.text = "Score: " + Globals.score
    }

    draw(ctx){
        ctx.fillStyle = this.parent.fill
        ctx.font = this.parent.font
        ctx.fillText(this.parent.text, this.transform.x, this.transform.y)
    }
}

window.ScoreTextUpdater = ScoreTextUpdater