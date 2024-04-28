class CameraMover extends Component{
    start(ctx){
        Camera.main.transform.x = 0
        Camera.main.transform.y = 0
        Camera.main.transform.scaleX = 1
        Camera.main.transform.scaleY = 1
    }

    update(ctx){
        const speed = 100
        const scale = 1.01

        if (Input.keysDown.includes("KeyJ")) {
            Camera.main.transform.x -= speed / Time.fps
            console.log(Camera.main.transform.x)
        }
        if (Input.keysDown.includes("KeyL")) {
            Camera.main.transform.x += speed / Time.fps
        }
        if (Input.keysDown.includes("KeyI")) {
            Camera.main.transform.y -= speed / Time.fps
        }
        if (Input.keysDown.includes("KeyK")) {
            Camera.main.transform.y += speed / Time.fps
        }

        if (Input.keysDown.includes("KeyU")){
            Camera.main.transform.scaleX /= scale
            Camera.main.transform.scaleY /= scale
        }
        if (Input.keysDown.includes("KeyO")){
            Camera.main.transform.scaleX *= scale
            Camera.main.transform.scaleY *= scale
        }
    }
}

window.CameraMover = CameraMover