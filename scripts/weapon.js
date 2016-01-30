var Weapon = {};

Weapon.SingleBullet = function(game) {
	Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);
	
	this.nextFire = 0;
	this.bulletSpeed = 600;
	this.fireRate = 100;
	
	for(var i = 0; i < 64; i++) {
		this.add(new Bullet(game, 'tile', true));
	}
	
	return this;
};

Weapon.SingleBullet.prototype = Object.create(Phaser.Group.prototype);
Weapon.SingleBullet.prototype.constructor = Weapon.SingleBullet;

Weapon.SingleBullet.prototype.fire = function(source) {
	if(this.game.time.time < this.nextFire) { return; }
	
	var x = source.x + 10;
	var y = source.y + 10;
	
	this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
	
	this.nextFire = this.game.time.time + this.fireRate;
};