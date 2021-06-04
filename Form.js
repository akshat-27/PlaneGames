class Form {
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name")
        this.button = createButton("Play");
        this.greeting = createElement('h2');
        this.reset = createButton("Reset")
    }
    hide(){
    
        form.greeting.hide();
        form.title.hide();
        this.title.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.title.position(displayWidth/2.5, 0)
        this.title.html("Paper Aeroplane Race");
        this.input.position(displayWidth/2 - 100, displayHeight/4);
        this.button.position(displayWidth/2 + 100, displayHeight/3);
        this.greeting.position(displayWidth/2.3, displayHeight/2.8);
        this.reset.position(50, 20);
        this.button.mousePressed(()=>{
            this.greeting.html("Waiting for other players...")
            player.name = this.input.value
            this.title.hide();
            this.input.hide();
            this.button.hide();

            player.updateCount(playerCount + 1)
            player.index = playerCount
            player.updatePlayerInfo
            
            //function reset
            
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0);
            database.ref('Players').set({})
            Player.updatePlayersAtEnd(0);
        })
    }

}