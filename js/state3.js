demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#1976d2';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};