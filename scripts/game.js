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
		// Moved to boot
		//this.physics.startSystem(Phaser.Physics.ARCADE);
	},
	preload: function() {
		// Moved to splash screen (TODO: move to title)
		//this.load.image('player', 'img/player.png');
	},
	create: function() {
		this.player = this.add.sprite(400, 400, 'player');
		this.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.cursors = this.input.keyboard.createCursorKeys();
	},
	update: function() {
		this.player.body.velocity.set(0);
		
		if(this.cursors.left.isDown) {
			if(this.player.body.position.x - 100 > 0) {
				this.player.body.velocity.x = -this.speed;
			}
		} else if(this.cursors.right.isDown) {
			if(this.player.body.position.x + this.player.body.width + 100 < 800) {
				this.player.body.velocity.x = this.speed;
			}
		} 
		
		if(this.cursors.up.isDown) {
			if(this.player.body.position.y - 100 > 0) {
				this.player.body.velocity.y = -this.speed;
			}
		} else if(this.cursors.down.isDown) {
			if(this.player.body.position.y + this.player.body.height + 100 < 800) {
				this.player.body.velocity.y = this.speed;
			}
		}
	}
};