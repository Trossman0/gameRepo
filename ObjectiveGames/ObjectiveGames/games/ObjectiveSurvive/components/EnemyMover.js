class EnemyMover extends Component{
    constructor(){

    }

    start(ctx){
        this.player = Engine.currentScene.gameObjects.find(go=>go.name == 'Player')
    }
}