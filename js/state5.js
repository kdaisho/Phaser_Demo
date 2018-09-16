demo.state5 = function() {};
demo.state5.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#00796b';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};