"use strict";

var Unit = function( game, x, y, hp, imgKey )
{
    this.game = game; // TODO: remove

    // Create sprite at location
    Phaser.Sprite.call( this, game, x, y, imgKey );
    //this.exists = false;

    // Phaser Settings
    this.anchor.set(0.5);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    
    this.health = hp;
    this.weapons = [];

    switch( imgKey )
    {
        case "ranged_enemy":
            console.log("ranged")
            this.weapons.push( new Weapon.SpreadShot( game ) );
        break;

        case "melee":
            // TODO: change
            this.weapons.push( new Weapon.SpreadShot( game ) );
        break;
        default:
            console.log("default ranged");
            this.weapons.push( new Weapon.SingleBullet( game ) );
        break;
    }
};

Unit.prototype = Object.create( Phaser.Sprite.prototype );
Unit.prototype.constructor = Unit;

// TODO: fire & update
Unit.prototype.update = function( game, playerX, playerY )
{
    var src = {x : this.x, y: this.y};
    var target = {x: playerX, y: playerY};

    //this.weapons[0].fire( src, target );
};