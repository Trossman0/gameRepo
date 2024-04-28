class Scene {
    gameObjects = []
    hasStarted = false
    logicalWidth = -1
    aRatio = -1

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
        ctx.translate(-Camera.main.transform.x, -Camera.main.transform.y)
        ctx.scale(Camera.main.transform.scaleX, Camera.main.transform.scaleY)

        let desiredWidth = this.pixelWidth
        let desiredheight = this.pixelWidth / this.aRatio
        let plannedScaleX = desiredWidth
        let plannedScaleY = desiredheight
        let plannedScale = Math.min(plannedScaleX, plannedScaleY)

        ctx.scale(plannedScale, plannedScale)

        let windowAspectRatio = ctx.canvas.height / ctx.canvas.width

        let letterBox1End
        let letterBox2Start

        let usingLogicalCoordinates = this.logicalWidth > 0 && this.aRatio > 0

        if (usingLogicalCoordinates){
            if (this.aRatio > windowAspectRatio){
                letterBox1End = (ctx.canvas.width) / 2 - (ctx.canvas.height/this.aRatio)/2
                letterBox2Start = (ctx.canvas.width) / 2 + (ctx.canvas.height / this.aRatio) / 2
                ctx.translate(letterBox1End, 0)
                let scaleFactor = ctx.canvas.height / this.logicalWidth
                ctx.scale(scaleFactor, scaleFactor)
            }
            else{
                letterBox1End = (ctx.canvas.height) / 2 - (ctx.canvas.width * this.aRatio) / 2
                letterBox2Start = (ctx.canvas.height) / 2 + (ctx.canvas.width * this.aRatio) / 2
                ctx.translate(0, letterBox1End)
                let scaleFactor = ctx.canvas.width / (this.logicalWidth / this.aRatio)
                ctx.scale(scaleFactor, scaleFactor)
            }
        }
        
        let sortedLayers = [...this.gameObjects]
        sortedLayers = sortedLayers.sort((a, b) => a.layer - b.layer)

        for (const go of sortedLayers){
            if(go.draw){
                go.draw(ctx)
            }
        }
        ctx.restore()

        ctx.fillStyle = "black"
        if (usingLogicalCoordinates){
            if(this.aRatio > windowAspectRatio){
                ctx.fillRect(0, 0, letterBox1End, ctx.canvas.height)
                ctx.fillRect(letterBox2Start, 0, ctx.canvas.width, ctx.canvas.height)
            }
            else{
                ctx.fillRect(0, 0, ctx.canvas.width, letterBox1End)
                ctx.fillRect(0, letterBox2Start, ctx.canvas.width, ctx.canvas.height)
            }
        }
    }
}

window.Scene = Scene