const demo = {};
const keys = [
    'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'
];
const centerX = 1500 / 2;
const centerY = 1000 / 2;
let daisho;
let speed = 4;

demo.state0 = function() {};
demo.state0.prototype = {
    preload: function() {
        game.load.image('daisho', 'game-assets/sprites/daisho.png');
    },
    create: function() {
        game.stage.backgroundColor = '#d32f2f';
        addChangeStateEventListener(keys);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        daisho = game.add.sprite(centerX, centerY, 'daisho');
        daisho.anchor.setTo(.5, .5);
    },
    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            daisho.x += speed;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            daisho.x -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            daisho.y -= speed;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            daisho.y += speed;
        }
    }
};

function changeState(i, stateNum) {
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListener(keys) {
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        addKeyCallback(Phaser.Keyboard[key], changeState, i);
    }
}