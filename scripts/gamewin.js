"use strict";

var GameWin = function(game){
    console.log( "%cTitle screen state!", "color:green, background:white" );

    this.gameButton = null;
};

GameWin.prototype = {
    preload: function(){
    },

    create: function(){
        this.keyboard = this.input.keyboard;
		        var win = this.game.add.sprite( 0, 0, "win" );
				
				//testeset

    },

    destroy: function(){

    },

    update: function(){
		
        if( this.keyboard.isDown(71) ) 
        {
            this.game.state.start( "Title" );
        }
    }
};