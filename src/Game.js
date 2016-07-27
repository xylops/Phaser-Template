function gamingState(){};

gamingState.prototype = {
    create: function(){
        text();
        this.rock();

    },
    upadte: function(){

    },
    rock:function(){
        rock = game.add.image(game.world.width*0.25, game.world.height*0.5, 'rock');
        rock.anchor.setTo(0.5);
    },
}
