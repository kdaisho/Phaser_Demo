demo.state4 = function() {};
demo.state4.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};