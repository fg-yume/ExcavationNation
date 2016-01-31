"use strict";

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
		this.background = this.add.sprite(-1600, -1600, 'background');
		this.player = this.add.sprite(400, 400, 'player');
		this.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.keyboard = this.input.keyboard;
		this.weapons.push(new Weapon.SingleBullet(this.game));
		this.currentWeapon = 0;
		this.pointer = this.input.mousePointer;
	},   
	update: function() {
		this.player.body.velocity.set(0);
		
		if(this.pointer.isDown) {
			this.weapons[this.currentWeapon].fire(this.player, this.pointer);
		}
		
		if(this.keyboard.isDown(65)) {
			if(this.player.body.position.x - 100 > 0 || this.background.x >= 0) {
				this.player.body.velocity.x = -this.speed;
			} else {
				this.background.x += this.speed / 50;
			}
		} else if(this.keyboard.isDown(68)) {
			if(this.player.body.position.x + this.player.body.width + 100 < 800 || this.background.x <= -this.background.height + this.game.height) {
				this.player.body.velocity.x = this.speed;
			} else {
				this.background.x += -this.speed / 50;
			}
		}
		
		if(this.keyboard.isDown(87)) {
			if(this.player.body.position.y - 100 > 0 || this.background.y >= 0) {
				this.player.body.velocity.y = -this.speed;
			} else {
				this.background.y += this.speed / 50;
			}
		} else if(this.keyboard.isDown(83)) {
			if(this.player.body.position.y + this.player.body.height + 100 < 800 || this.background.y <= -this.background.width + this.game.width) {
				this.player.body.velocity.y = this.speed;
			} else {
				this.background.y -= this.speed / 50;
			}
		}
	}
};