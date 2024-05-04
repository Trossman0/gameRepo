class EnemySpawner extends Component{
    update(ctx){
        if(Globals.score % 1000 == 0 && Globals.score != 0){
            let temp = new Enemy()
            GameObject.instantiate(temp, -1000, -1000, 50, 50)
            temp.start()
        }
    }
}

window.EnemySpawner = EnemySpawner