import "../prefabs/StaticTextGameObject.js"
import "../prefabs/Restart.js"

import "../components/Restarter.js"

class DeadScene extends Scene{
    constructor(cause = "Oopsie something went wrong"){
        super("black")
        this.cause = cause
    }

    start(ctx){
        Globals.highScores.push(Globals.score)
        for(let scr of Globals.highScores){
            if(scr > Globals.highScore){
                Globals.highScore = scr
            }
        }

        GameObject.instantiate(new StaticTextGameObject(this.cause, "50px Cosmic Sans", "red", "center"), ctx.canvas.width / 2, ctx.canvas.height / 2)
        GameObject.instantiate(new StaticTextGameObject('Press r to Restart', "20px garamond", "white", "center"), ctx.canvas.width/2, ctx.canvas.height/2+70)
        GameObject.instantiate(new StaticTextGameObject("Your Score: " + Globals.score, "20px garamond", "white", "center"), ctx.canvas.width/2, ctx.canvas.height/2+50)
        GameObject.instantiate(new StaticTextGameObject("Highscore: " + Globals.highScore, "20px garamond", "yellow"), 0, 20)
        GameObject.instantiate(new Restart())
    }
}

window.DeadScene = DeadScene