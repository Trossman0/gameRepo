class Collisions {
    static RectangleRectangleCollision(rectOneCenter, rectOneWidth, rectOneHeight, rectTwoCenter, rectTwoWidth, rectTwoHeight){
        if(
            rectOneCenter.x - rectOneWidth / 2 > rectTwoCenter.x + rectTwoWidth / 2 ||
            rectOneCenter.x + rectOneWidth / 2 < rectTwoCenter.x - rectTwoWidth / 2 ||
            rectOneCenter.y - rectOneHeight / 2 > rectTwoCenter.y + rectTwoHeight / 2 ||
            rectOneCenter.y + rectOneHeight / 2 < rectTwoCenter.y - rectTwoHeight / 2   
        ){
            return false
        }
        return true
    }

    static PointRectangleCollision(point, rectCenter, width, height){
        if(
            point.x > rectCenter.x - width / 2 &&
            point.x < rectCenter.x + width / 2 &&
            point.y > rectCenter.y - height / 2 &&
            point.y < rectCenter.y + height / 2 
        ){
            return true
        }
        return false
    }

    static PointCircleCollision(point, circleCenter, circleRadius){
        let distance = Math.sqrt((point.x - circleCenter.x) ** 2 + (point.y - circleCenter.y) ** 2)
        let toReturn = distance < circleRadius
        return toReturn
    }

    static CircleCircleCollision(centerOne, centerTwo, radiusOne, radiusTwo){
        let distance = Math.sqrt((centerOne.x - centerTwo.x) ** 2 + (centerOne.y - centerTwo.y) ** 2)
        if (radiusOne + radiusTwo > distance){
            return true
        }
        return false
    }
}

window.Collisions = Collisions