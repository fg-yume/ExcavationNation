var game = new Phaser.Game(800, 800, Phaser.Auto, 'game');

/*window.onload = function() {
	console.log("loaded");
	game = new Phaser.Game(800, 800, Phaser.Auto, 'game');
};*/

var PhaserGame = PhaserGame || function() {
	this.background = null;
	this.foreground = null;
	
	this.player = null;
	this.cursors = null;
	this.speed = 300;
	
	this.weapons = [];
	this.currentWeapon = 0;
	this.weaponName = null;
};

PhaserGame.prototype = {
	init: function() {
		this.game.renderer.renderSession.roundPixel = true;
		this.physics.startSystem(Phaser.Physics.ARCADE);
	},
	preload: function() {
		this.load.image('player', 'img/player.png');
	},
	create: function() {
		this.player = this.add.sprite(64, 200, 'player');
		this.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.cursors = this.input.keyboard.createCursorKeys();
	},
	update: function() {
		this.player.body.velocity.set(0);
		
		if(this.cursors.left.isDown) {
			this.player.body.velocity.x = -this.speed;
		} else if(this.cursors.right.isDown) {
			this.player.body.velocity.x = this.speed;
		} 
		
		if(this.cursors.up.isDown) {
			this.player.body.velocity.y = -this.speed;
		} else if(this.cursors.down.isDown) {
			this.player.body.velocity.y = this.speed;
		}
	}
};

game.state.add('Game', PhaserGame, true);