"use strict";

var Load = function(game){
    console.log( "%cLoad State -----", "color:green, background:white" );
};

Load.prototype = {
    preload: function(){
        // Load splash screen

        // Loading text
        // TODO: remove due to img
        var loadingLabel = this.game.add.text( 80, 150, 'loading....', {font: '30px Courier', fill: '#ffffff'} );

        this.game.load.image("splash_screen", "img/bgs/splashscreen.png");
    },

    create: function(){
        // Go to splash
        this.game.state.start( "SplashScreen" );
    },

    destroy: function(){
        // Remove text
        console.log( "destroying loading label!" );
        loadingLabel.destroy();
    }
};