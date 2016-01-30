var game;
var tiles;

window.onload = function() {
	console.log("loaded");
	game = new Phaser.Game(800, 720, Phaser.Auto, "");
	game.state.add("PlayGame", playGame);
	game.state.start("PlayGame");
}

var playGame = function(game){};

playGame.prototype = {
	preload: function() {
		// load images here ex:
		// game.load.image("goat", "goat.png");
		game.load.image("tile", "/img/tile.png");
	},
	create: function() {
		game.stage.backgroundColor = 0x74af21;
		rounds = -1;
		tiles = new Array(6);
		for(var i = 0; i < tiles.Count; i++) {
			tiles[i] = new Array(6);
			for(var j = 0; j < tiles[i].Count; j++) {
				tiles[i][j] = game.add.sprite(x, y, "tile");
			}
		}
		game.input.onDown.add(function() {
			// on down logic
		});
		game.input.onUp.add(function() {
			console.log("UP");
		});
	}, 
	update: function() {
		
	}
}