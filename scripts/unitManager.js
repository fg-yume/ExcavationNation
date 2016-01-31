"use strict";

// namespace
var PhaserGame = PhaserGame || {};
var Engine = Engine || {};

Engine.UnitTypes = {
    MELEE  : 0,
    RANGED : 1,
    NUM_TYPES : 2,
}

Engine.UnitManager = (function()
{
    var UnitManager = function()
    {
        // unit group
        this.units = game.add.group();
        this.units.enableBody = true;
        this.units.physicsBodyType = Phaser.Physics.ARCADE;

        // keeps track of unit types that have been destroyed
        this.destroyedUnits = new Map(); // UnitType / amount
    };

    UnitManager.prototype.reset = function()
    {
        this.destroyedUnits = new Map();
        this.units.destroy( true );
    }

    UnitManager.prototype.createUnit = function(x, y, unitType, hp, assetName)
    {
        var unit = this.units.create(x, y, assetName);
        unit.health = hp;
        unit.prototype.unitType = (unitType === "undefined") ? Engine.UnitTypes.NUM_TYPES : unitType;

        // TODO: phaser anchors and animations
    }

    // Only handles adding to list of destroyed units
    UnitManager.prototype.destroyUnit = function(unitType)
    {
        // If doesn't exist
        var amnt = this.destroyedUnits.get( unitType );
        if(  amnt === "undefined" )
        {
            this.destroyedUnits.set( unitType, 1 );
            return;
        }

        // Increment amount that have been destroyed
        this.destroyedUnits.set( unitType, amnt+1 );
    }

    UnitManager.prototype.amountDestroyed = function( unitType )
    {
        var amnt = this.destroyedUnits.get( unitType );

        if( amnt === "undefined" )
        { 
            return 0; 
        }
        else
        { 
            return amnt; 
        }
    }

    UnitManager.prototype.update = function()
    {

    }

})();