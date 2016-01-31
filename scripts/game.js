"use strict";

var PhaserGame = PhaserGame || function() {
	this.background = null;
	this.foreground = null;
	
	this.player = null;
	this.cursors = null;
	this.speed = 300;
	this.moving = false;
	
	this.weapons = [];
	this.currentWeapon = 0;
	this.weaponName = null;
	
	this.runes = [];
};

PhaserGame.prototype = {
	init: function() {
		this.game.renderer.renderSession.roundPixel = true;
		// Moved to boot
		//this.physics.startSystem(Phaser.Physics.ARCADE);
	},
	preload: function() {

		this.load.image('bullet', 'img/bullet.png');
		this.load.image('rune1', 'img/rune1.png');
		this.load.image('rune2', 'img/rune2.png');
		this.load.image('rune3', 'img/rune3.png');
		this.load.spritesheet('playersprite', 'img/playersprite.png', 34, 36);
		
		this.load.audio('soundtrack', 'audio/MagicalGirl.wav');
		//this.load.audio('energyBall', 'audio/MagicalGirl-EnergyBall#3.wav');
		//this.load.audio('itemPickup', 'audio/MagicalGirl-ItemPickup.wav');
		//this.load.audio('jellySquish', 'audio/MagicalGirl-JellySquish.wav');
		//this.load.audio('ow', 'audio/MagicalGirl-Ow.wav');
	},
	create: function() {
		this.background = this.add.sprite(-1600, -1600, 'background');
		this.player = this.add.sprite(400, 400, 'playersprite');
		this.player.anchor.setTo(0.5, 0.5);
		this.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.keyboard = this.input.keyboard;
		this.weapons.push(new Weapon.SingleBullet(this.game));
		this.weapons.push(new Weapon.SpreadShot(this.game));
		this.runes.push(new Rune(this.game, 400, 200, 'rune1'));
		this.runes.push(new Rune(this.game, 200, 400, 'rune3'));
		this.runes.push(new Rune(this.game, 600, 400, 'rune2'));
		this.runes.push(new Rune(this.game, 400, 600, 'rune1'));
		this.currentWeapon = 1;
		this.pointer = this.input.mousePointer;
		
		this.player.animations.add('up', [0, 1], 10, true);
		this.player.animations.add('upright', [2, 3], 10, true);
		this.player.animations.add('right', [4, 5], 10, true);
		this.player.animations.add('downright', [6, 7], 10, true);
		this.player.animations.add('down', [8, 9], 10, true);
		
		this.energyBlast = this.game.add.audio('energyBall');
	},   
	update: function() {
		this.player.body.velocity.set(0);
		
		if(this.pointer.isDown) {
			this.weapons[this.currentWeapon].fire(this.player, this.pointer);
			this.energyBlast.play();
		}
		
		this.moving = false;
		
		if(this.keyboard.isDown(65)) {
			if(this.player.body.position.x - 100 > 0 || this.background.x >= 0) {
				this.player.body.velocity.x = -this.speed;
			} else {
				this.background.x += this.speed / 50;
				
				//Runes
				for(var i = 0; i < this.runes.length; i++)
				{
					this.runes[i].x += this.speed / 50;
				}
			}
		} else if(this.keyboard.isDown(68)) {
			if(this.player.body.position.x + this.player.body.width + 100 < 800 || this.background.x <= -this.background.height + this.game.height) {
				this.player.body.velocity.x = this.speed;
			} else {
				this.background.x += -this.speed / 50;
				
				for(var i = 0; i < this.runes.length; i++)
				{
					this.runes[i].x += -this.speed / 50;
				}
			}
		}
		
		if(this.keyboard.isDown(87)) {
			if(this.player.body.position.y - 100 > 0 || this.background.y >= 0) {
				this.player.body.velocity.y = -this.speed;
			} else {
				this.background.y += this.speed / 50;
				
				for(var i = 0; i < this.runes.length; i++)
				{
					this.runes[i].y += this.speed / 50;
				}
			}
		} else if(this.keyboard.isDown(83)) {
			if(this.player.body.position.y + this.player.body.height + 100 < 800 || this.background.y <= -this.background.width + this.game.width) {
				this.player.body.velocity.y = this.speed;
			} else {
				this.background.y -= this.speed / 50;
				
				for(var i = 0; i < this.runes.length; i++)
				{
					this.runes[i].y += -this.speed / 50;
				}
			}
		}
		
		/*var xDist = this.player.x - this.pointer.x;
		var yDist = this.player.y - this.pointer.y;
		var angle = Math.atan2(yDist / xDist) * 180 / Math.PI;
		*/
		var deltaY = this.pointer.y - this.player.y;
		var deltaX = this.pointer.x - this.player.x;
		var angle = Math.atan(deltaY / deltaX) * 180 / Math.PI;
		angle += 90;
		if(deltaX < 0) {
			angle += 180;
		}
		
		if(angle > 336 || angle < 22) {
			this.player.animations.play('up');
			this.player.scale.x = 1;
		} else if(angle >= 22 && angle < 66) {
			this.player.animations.play('upright');
			this.player.scale.x = 1;
		} else if(angle >= 66 && angle < 111) {
			this.player.animations.play('right');
			this.player.scale.x = 1;
		} else if(angle >= 111 && angle < 156) {
			this.player.animations.play('downright');
			this.player.scale.x = 1;
		} else if(angle >= 156 && angle < 201 ) {
			this.player.animations.play('down');
			this.player.scale.x = 1;
		} else if(angle >= 201 && angle < 246 ) {
			this.player.animations.play('downright');
			this.player.scale.x = -1;
		} else if(angle >= 246 && angle < 291 ) {
			this.player.animations.play('right');
			this.player.scale.x = -1;
		} else if(angle >= 291 && angle < 336 ) {
			this.player.animations.play('upright');
			this.player.scale.x = -1;
		}
	}
};