const demo = {};
const keys = [
    'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'
];

demo.state0 = function() {};
demo.state0.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#d32f2f';
        addChangeStateEventListener(keys);
    },
    update: function() {
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