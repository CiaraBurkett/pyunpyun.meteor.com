Template.first.first = function() {
    // All game code goes here!

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'first', {preload: preload, create: create, update: update});

    function preload() {
        game.load.image('sky', '/img/tutorial/sky.png');
        game.load.image('ground', '/img/tutorial/ground.png');
        game.load.image('star', '/img/tutorial/star.png');
        game.load.spritesheet('dude', '/img/tutorial/dude.png', 32, 48);
    }

    function create() {
        game.add.sprite(0, 0, 'star');
    }

    function update() {
    }
};
