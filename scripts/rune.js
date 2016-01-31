var Rune = function(game, x, y, key){
	
	game.add.sprite(x, y, key);
	
	/*Phaser.Sprite.call(this, game, x, y, key);
	
	this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
	
	this.anchor.set(0.5);
	
	console.log("howdy!");
	
	this.checkWorldBounds = true;
	this.outOfBoundsKill = true;
	this.exists = false;
	
	this.tracking = false;
	this.scaleSpeed = 0;*/
};

Rune.prototype = Object.create(Phaser.Sprite.prototype);
Rune.prototype.constructor = Rune;

Rune.prototype.update = function(){
	//
};