demo.state1 = function() {};
demo.state1.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#c2185b';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};