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
import "../components/Lifetime.js"
import "../components/Boost.js"

class MainScene extends Scene{
    constructor(){
        super("DarkSlateGrey")
        this.aRatio = window.innerHeight/window.innerWidth
        this.logicalWidth = 1000
    }

    start(ctx){
        GameObject.instantiate(new Controller())
        GameObject.instantiate(new TimeExtender(), Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 25, 25)
        GameObject.instantiate(new TimeExtender(), Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 25, 25)
        GameObject.instantiate(new Player(), 0, 0, 50, 50)
        GameObject.instantiate(new TextGameObject(), 0, 0)
        GameObject.instantiate(new Enemy(), -1000, -1000, 50, 50)

    }
}

window.MainScene = MainScene