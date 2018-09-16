demo.state9 = function() {};
demo.state9.prototype = {
    preload: function() {
    },
    create: function() {
        game.stage.backgroundColor = '#455a64';
        addChangeStateEventListener(keys);
    },
    update: function() {
    }
};