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
        case "ranged":
            this.weapons.push( new Weapon.SingleBullet( game ) );
        break;

        case "melee":
            // TODO: change
            this.weapons.push( new Weapon.SpreadShot( game ) );
        break;
    }
};

Unit.prototype = Object.create( Phaser.Sprite.prototype );
Unit.prototype.constructor = Unit;

// TODO: fire