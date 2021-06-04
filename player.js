class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    updatePlayerInfo(){
      var playerIndex = "Players/player" + player.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        rank: this.rank
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
         allPlayers = data.val();
      })
    }
  
    getPlayersAtEnd(){
      var getPlayersAtEndRef = database.ref("playersAtEnd")
      getPlayersAtEndRef.on("value", (data)=>{
        this.rank = data.val();
      })
    }
    static updatePlayersAtEnd(count){
      database.ref('/').update({
        PlayersAtEnd:count
      })
    }
    WinMessage(){
      fill("green");
      textSize(30);
      text("WELL DONE! YOU FINISHED THE RACE! :)", camera.position.x - 100, 120 + camera.position.y*0);
    }
  }
  