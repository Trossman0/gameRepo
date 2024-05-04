import "./classes/Component.js"
import "./classes/GameObject.js"
import "./classes/Scene.js"

import "./geometry/Vector2.js"
import "./geometry/Line2.js"
import "./geometry/Rectangle2.js"
import "./geometry/Circle2.js"

import "./components/Circle.js"
import "./components/Line.js"
import "./components/Point.js"
import "./components/Rectangle.js"
import "./components/Text.js"
import "./components/Transform.js"

import "./prefabs/Camera.js"

import "./static/Collisions.js"
import "./static/CollisionsGeometric.js"
import "./static/Input.js"
import "./static/Globals.js"
import "./static/Time.js"
import "./static/EventSystems.js"

class Engine {

    isSystemPuased = false

    static gameLoop(){
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        if(Input.keysUpThisFrame.includes("KeyP")){
            if(Engine.isSystemPuased){
                Engine.isSystemPuased = false
            }
            else{
                Engine.isSystemPuased = true
            }
        }

        Engine.currentScene.draw(ctx)

        if(!Engine.isSystemPuased){

            Engine.currentScene._start(ctx)
            Engine.currentScene.update(ctx)
            // Engine.currentScene.gameObjects = Engine.currentScene.GameObjects.filter(go=>go.markForDestroy == false)
        }

        Input.update()
        Time.update(ctx)
    }

    static setup(){
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)
        document.addEventListener("mousemove", Input.mousemove)
        document.addEventListener("mouseup", Input.mouseup)
        
        setInterval(Engine.gameLoop, Time.ms)
    }  
}

window.Engine = Engine