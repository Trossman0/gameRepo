class Text extends Component{
    constructor(text='', font='30px Garamond', fill ='gray', align='left'){
        super()
        this.text = text
        this.font = font
        this.fill = fill
        this.align = align
    }

    draw(ctx){
        ctx.fillStyle = this.fill
        ctx.font = this.font
        ctx.textAlign = this.align
        ctx.fillText(this.text, this.transform.x, this.transform.y)
    }
}

window.Text = Text