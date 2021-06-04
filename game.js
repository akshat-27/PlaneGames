class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",((data)=>{
       gameState = data.val();
    }))
  
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    plane1 = createSprite(10,displayHeight*0.25 - 90, 40, 100);
    plane1.addImage("plane1",plane1_img);
    plane1.scale = 0.25
    plane2 = createSprite(10,displayHeight*0.5 - 100, 40, 100);
    plane2.addImage("plane2",plane2_img);
    plane2.scale = 0.5
    plane3 = createSprite(10,displayHeight*0.75 - 130, 40, 100);
    plane3.addImage("plane3",plane3_img);
    plane3.scale = 0.5
    plane4 = createSprite(10,displayHeight - 170, 40, 100);
    plane4.addImage("plane4",plane4_img);
    plane4.scale = 0.25
    players = [plane1, plane2, plane3, plane4];
  }

  play(){
    if(gameState === 1){
    
    form.hide();
    background(240, 117, 98);
    image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);

    Player.getPlayerInfo();
    player.getPlayersAtEnd();

    
      var index = 0;

      //x and y position of the planes
      var x = 20;
      var y = -50;
      if(allPlayers !== undefined){
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the planes a little away from each other in x direction
        x = 20+allPlayers[plr].distance;
        y = y+200
        //use data form the database to display the planes in y direction
        players[index-1].x = x;
        players[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          
          //planes[index - 1].shapeColor = "red";
          camera.position.x = x;
          camera.position.y = displayHeight/2;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance += 20
      player.updatePlayerInfo();
    }

    if(player.distance > 7019 && gameState === 1){
      player.rank += 1
      Player.updatePlayersAtEnd(player.rank)
      player.WinMessage();
      player.updatePlayerInfo()
      gameState = 2
      end();
    }
   
    drawSprites();
  }
  }


  end(){
    player.getPlayerInfo();
  }
}