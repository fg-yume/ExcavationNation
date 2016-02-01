var Weapon = {};


/************************************************************
*						SINGLE SHOT							*
************************************************************/
Weapon.SingleBullet = function(game, imgKey) {
	Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);
	
	var key = imgKey || 'bullet';

	this.nextFire = 0;
	this.bulletSpeed = 600;
	this.fireRate = 100;
	
	for(var i = 0; i < 64; i++) {
		this.add(new Bullet(game, imgKey, true));
	}
	
	return this;
};

Weapon.SingleBullet.prototype = Object.create(Phaser.Group.prototype);
Weapon.SingleBullet.prototype.constructor = Weapon.SingleBullet;

Weapon.SingleBullet.prototype.fire = function(source, target) {
	if(this.game.time.time < this.nextFire) { return; }
	
	var x = source.x;
	var y = source.y;
	
	var deltaY = target.y - source.y;
	var deltaX = target.x - source.x;
	var angle = Math.atan(deltaY / deltaX) * 180 / Math.PI;
	if(deltaX < 0) {
		angle += 180;
	}
	
	this.getFirstExists(false).fire(x, y, angle, this.bulletSpeed, 0, 0);
	
	this.nextFire = this.game.time.time + this.fireRate;
};


/************************************************************
*						SPREAD SHOT							*
************************************************************/
Weapon.SpreadShot = function(game) {
	Phaser.Group.call(this, game, game.world, 'Spread Shot', false, true, Phaser.Physics.ARCADE);
	
	this.nextFire = 0;
	this.bulletSpeed = 600;
	this.fireRate = 100;
	
	for(var i = 0; i < 64; i++) {
		this.add(new Bullet(game, 'bullet', true));
	}
	
	return this;
}

Weapon.SpreadShot.prototype = Object.create(Phaser.Group.prototype);
Weapon.SpreadShot.prototype.constructor = Weapon.SpreadShot;

Weapon.SpreadShot.prototype.fire = function(source, target) {
	if(this.game.time.time < this.nextFire) { return; }
	
	var x = source.x;
	var y = source.y;
	
	var deltaY = target.y - source.y;
	var deltaX = target.x - source.x;
	var angle = Math.atan(deltaY / deltaX) * 180 / Math.PI;
	if(deltaX < 0) {
		angle += 180;
	}
	
	this.getFirstExists(false).fire(x, y, angle, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, angle - 30, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, angle + 30, this.bulletSpeed, 0, 0);
	
	this.nextFire = this.game.time.time + this.fireRate;
};