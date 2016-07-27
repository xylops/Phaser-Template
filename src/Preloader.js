function Preloader(){

}

Preloader.prototype = {
    preload : function(){
        game.preloadBar = this.add.sprite(game.world.centerX, game.world.centerY, 'preloadBar');
        game.preloadBar.anchor.setTo(0.5,0.5);
        game.load.setPreloadSprite(game.preloadBar);

        game.load.image('rock', 'img/rock.png');
    },

    create : function(){
        game.preloadBar.cropEnabled = false;

    },

    update:function(){
        game.ready=true;
        game.state.start('StartMenu');

    }
}
