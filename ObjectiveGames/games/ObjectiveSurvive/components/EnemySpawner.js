class EnemySpawner extends Component{
    update(ctx){
        if(Globals.score % 1000 == 0){
            let temp = new Enemy()
            GameObject.instantiate(temp, -50, -50, 50, 50)
            temp.start()
        }
    }
}

window.EnemySpawner = EnemySpawner