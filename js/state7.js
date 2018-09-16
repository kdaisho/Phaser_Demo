demo.state7 = function() {};
demo.state7.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#ffa000';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};