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
    //this.outOfBoundsKill = true;
    
    this.health = hp;
    this.weapons = [];
    this.range = {x: 100, y: 100};

    switch( imgKey )
    {
        case "ranged_enemy":
            console.log("ranged")
            this.weapons.push( new Weapon.SingleBullet( game ) );
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

Unit.prototype.update = function( playerX, playerY )
{
    if( this.isInRange( playerX, playerY ) )
    {
        this.attack( playerX, playerY );
    }
};

Unit.prototype.attack = function( playerX, playerY )
{
    var src = {x : this.x, y: this.y};
    var target = {x: playerX, y: playerY};

    this.weapons[0].fire( src, target );
};

Unit.prototype.isInRange = function( playerX, playerY )
{
    if ( ( this.x - this.range.x <= playerX || 
            this.x + this.range.x >= playerX ) &&
        ( this.y - this.range.y <= playerY || 
            this.y + this.range.y >= playerY ) )
        {
            // player is within range
            return true;
        }

    return false;
};

Unit.prototype.move = function( x, y )
{
    // don't need these...
    var xMov = x || 0;
    var yMov = y || 0;

    this.x += xMov;
    this.y += yMov; 
};