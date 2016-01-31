"use strict";

var Unit = function( game, x, y, hp, simgKey )
{
    // Create sprite at location
    // TODO: only if on screen?
    Phaser.Sprite.call( this, game, x, y, imgKey );
    this.exists = false;

    // Phaser Settings
    this.anchor.set(0.5);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    
    this.health = hp;
};