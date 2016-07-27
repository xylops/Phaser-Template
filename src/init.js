
var game = new Phaser.Game(736, 414, Phaser.AUTO, 'gameContainer');

game.state.add('Boot', Boot);
game.state.add('Preloader', Preloader);
game.state.add('StartMenu', StartMenu);
game.state.add('gamingState',gamingState);
game.state.start('Boot');
