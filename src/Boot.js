function Boot(){}

Boot.prototype={

    preload:function(){
        game.load.image('preloadBar','img/ajax-loader.gif');

    },
    create:function(){
        //only one pointer
        game.input.maxPointer = 1;
        //when click open another tab in browser, it will pause
        game.stage.disableVisbilityChange = false;
        // take up whole container
        game.scale.scaleMode = Phaser.ScaleManager.Show_all;
        // set min height and width
        game.scale.minWidth = 568;
        game.scale.minHeight = 320;
        // game in center of container
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignHorizontalVertical = true;
        // mobile Version Portrait
        game.stage.forcePortrait = false;
        //create the pointer that mention on line 12
        game.input.addPointer();
        //preloading screen background
        game.stage.backgroundColor = '#171642';

        game.state.start('Preloader');


    }

}
