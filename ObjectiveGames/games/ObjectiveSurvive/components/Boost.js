class Boost extends Component{
    draw(ctx){
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.rect(this.transform.x - this.parent.boost_size/2, this.transform.y-this.transform.scaleX + 10, this.parent.boost_size, 10)
        ctx.fill()

    }
}

window.Boost = Boost