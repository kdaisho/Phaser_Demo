demo.state2 = function() {};
demo.state2.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#7b1fa2';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};