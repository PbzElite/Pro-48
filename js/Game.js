class Game {
    constructor(){
        this.mapImg = createImg("images/map.png");
    }
    
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }
    

    
    play(){
        this.mapImg.postion(640,360);
    }
}