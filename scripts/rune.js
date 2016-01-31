var Rune = function(game, x, y, key){
	Phaser.Sprite.call(this, game, x, y, key);
	
	this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
	
	game.add.existing(this);
};

Rune.prototype = Object.create(Phaser.Sprite.prototype);
Rune.prototype.constructor = Rune;

Rune.prototype.update = function(){
	//
};