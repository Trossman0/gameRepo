import "../prefabs/Button.js"

import "../components/ButtonLogic.js"


class StartScene extends Scene{
    constructor(){
        super("DarkSlateGray")
    }

    start(ctx){
        GameObject.instantiate(new Button(), window.innerWidth/2, window.innerHeight/2+150, 200, 50)
        GameObject.instantiate(new StaticTextGameObject("Survive", "30px Chalkduster", "White", "center"), window.innerWidth/2, window.innerHeight/2+155)
        GameObject.instantiate(new StaticTextGameObject("Objective Survive", "50px Chalkduster", "White", "center"),window.innerWidth/2, window.innerHeight/2-20)
        GameObject.instantiate(new StaticTextGameObject("Collect the Yellow Cubes to survive longer", "20px Chalkduster", "White", "center"),window.innerWidth/2, window.innerHeight/2+25)
        GameObject.instantiate(new StaticTextGameObject("W,A,S,D or Arrow keys to move and shift to boost", "20px Chalkduster", "White", "center"),window.innerWidth/2, window.innerHeight/2+50)
    }
}

window.StartScene = StartScene