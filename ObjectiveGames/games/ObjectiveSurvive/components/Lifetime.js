class LifeTime extends Component{
    draw(ctx){
        ctx.fillStyle = 'white'
        ctx.font = '20px Chalkduster'
        ctx.textAlign = 'center'
        if(this.parent.time_to_live > 3000){
            this.text = Math.trunc(this.parent.time_to_live/1000)
        }
        else{
            this.text = this.parent.time_to_live/1000
        }
        ctx.fillText(this.text, this.transform.x, this.transform.y-45)
    }
}

window.LifeTime = LifeTime