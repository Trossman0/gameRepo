import "../prefabs/Controller.js"
import "../prefabs/Enemy.js"
import "../prefabs/Player.js"
import "../prefabs/TimeExtender.js"
import "../prefabs/ScoreTextGameObject.js"

import "../components/PlayerController.js"
import "../components/CameraMover.js"
import "../components/EnemyAI.js"
import "../components/TimeExtenderComponent.js"
import "../components/ScoreTextUpdater.js"
import "../components/EnemySpawner.js"

class MainScene extends Scene{
    constructor(){
        super("DarkSlateGrey")
    }

    start(ctx){
        GameObject.instantiate(new Controller())
        GameObject.instantiate(new TimeExtender(), Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 25, 25)
        GameObject.instantiate(new TimeExtender(), Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 25, 25)
        GameObject.instantiate(new Player(), window.innerWidth / 2, window.innerHeight / 2, 50, 50)
        GameObject.instantiate(new TextGameObject("Score: " + Globals.score, "30px Garamond", "white"), 0, 30)
        GameObject.instantiate(new Enemy(), -50, -50, 50, 50)
    }
}

window.MainScene = MainScene