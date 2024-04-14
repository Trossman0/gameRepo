class Scene {
    gameObjects = []
    hasStarted = false

    constructor(bgcolor) {
        this.bgcolor = bgcolor
        this.hasStarted = false
    }

    _start(ctx) {
        if (!this.hasStarted) {
            this.hasStarted = true

            if (this.start) {
                this.start(ctx)
            }
            for (const go of this.gameObjects) {
                if (go.start) {
                    go.start(ctx)
                }
            }
        }
    }

    update(ctx) {
        for (const go of this.gameObjects) {
            if (go.update) {
                go.update(ctx)
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.bgcolor
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.save()
        ctx.translate(-CanvasCaptureMediaStreamTrack.main.transfrom.x, -CanvasCaptureMediaStreamTrack.main.transform.y)
        ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)

        let sortedLayers = [...this.gameObjects]
        sortedLayers = sortedLayers.sort((a, b) => a.layer - b.layer)

        for (const go of sortedLayers){
            if(go.draw){
                go.draw(ctx)
            }
        }
        ctx.restore()
    }
}

window.Scene = Scene