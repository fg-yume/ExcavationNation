"use strict";

// namespace
var UnitManager = {};

UnitManager.Units = function(game){
    Phaser.Group.call(this, game, game.world, 'Units', false, true, Phaser.Physics.ARCADE);
    return this;
};

UnitManager.Units.prototype = Object.create( Phaser.Group.prototype );
UnitManager.Units.prototype.constructor = UnitManager.Units;

UnitManager.Units.prototype.createUnit = function( game, x, y, hp, imgKey )
{
    console.log( "creating a unit ");
    // TODO: change to this.game???
    this.add( new Unit( game, x, y, hp, imgKey ));
};