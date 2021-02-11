class Game{
    constructor(){}

    update(state){
        database.ref('/').update({
            'gameState': state
        });
    }

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",
            function(data){
                gameState=data.val();
            }
        );
    }

    async start(){
        if(gameState===0){
            player= new Player();
            var playerCountRef= await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val();
                player.getCount();// player class create getcount() 
            }
            form= new Form();
            form.display();//create display function in form
        }

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hideForm();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo(); //allPlayers have name and distance of all the players.
        if(allPlayers !== undefined){
            var index=0;
            var x=0;
            var y;
            //var displayPosition=130;
            for(var plr in allPlayers){
                index=index+1;
                x+=200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;           
                if(index===player.index){
                    cars[index-1].shapeColor="red";
                }
                else{
                    cars[index-1].shapeColor="black";
                }
                // displayPosition=displayPosition+20;
                // textSize(15);
                // text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,displayPosition);
            }
        }

        if(keyDown(UP_ARROW)&& player.index !== null){
            player.distance+=20;
            player.update();
        }
    }

}