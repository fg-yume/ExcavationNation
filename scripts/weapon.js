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

Weapon.SingleBullet.prototype.fire = function(source, target) {
	if(this.game.time.time < this.nextFire) { return; }
	
	var x = source.x + source.width / 2;
	var y = source.y + source.height / 2;
	
	var deltaY = target.y - source.y;
	var deltaX = target.x - source.x;
	console.log(target.x + " | " + target.y);
	var angle = Math.atan(deltaY / deltaX) * 180 / Math.PI;
	if(deltaX < 0) {
		angle += 180;
	}
	console.log(angle);
	
	this.getFirstExists(false).fire(x, y, angle, this.bulletSpeed, 0, 0);
	
	this.nextFire = this.game.time.time + this.fireRate;
};