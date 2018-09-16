demo.state6 = function() {};
demo.state6.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#afb42b';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};