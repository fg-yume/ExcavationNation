"use strict";

// Callback for boot state
var Boot = function(game){
    console.log( "%cBoot up", "color:green, background:white" );
};

Boot.prototype = {
    preload: function(){
        //this.game.load.image("loading", "LOADING");
    },

    create: function(){
        // Init physics system
        this.game.physics.startSystem( Phaser.Physics.ARCADE );

        // Next state
        this.game.state.start( "Load" );
    }
};