demo.state8 = function() {};
demo.state8.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#5d4037';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};