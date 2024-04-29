class Transform extends Component{
    x = 0
    y = 0
    scaleX = 1
    scaleY = 1
    xVelocity = 0
    yVelocity = 0
    prev_x = 0
    prev_y = 0

    getPositionAsVector2(){
        return new Vector2(this.x, this.y)
    }

    getScaleAsVector2(){
        return new Vector2(this.scaleX, this.scaleY)
    }

}

window.Transform = Transform