const game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('state1', demo.state1);
game.state.start('start1');