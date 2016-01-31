var Rune = function(game, x, y, key){
	Phaser.Sprite.call(this, game, x, y, key);
	
	this.game = game;
	
	this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
	
	this.anchor.setTo(0.5, 0.5);
	
	//this.game.physics.enable(this, Phaser.Physics.ARCADE);
	
	//this.body.immovable = true;
	
	this.game.add.existing(this);
};

Rune.prototype = Object.create(Phaser.Sprite.prototype);
Rune.prototype.constructor = Rune;

Rune.prototype.update = function(){
	/*if(this.overlap(this.game.player))
	{
		//this.game.runes.splice(this.game.runes.splice.indexOf(this), 1);
		//this.destroy;
	}*/
};