"use strict";

var Engine = Engine || {};

Engine.SPLASHSCREEN_FADE_TIME = 2000;

var SplashScreen = function(game){
    console.log( "%cSplash Screen state!", "color:green, background:white" );
};

SplashScreen.prototype = {
    preload: function(){
        this.game.load.image("player", "img/player.png" );
    },

    create: function(){
        var splash = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, "splash_screen" );

        // Start invis
        splash.anchor.setTo(0.5, 0.5);
        splash.alpha = 0;

        var splashTween = this.game.add.tween( splash ).to( {alpha: 1}, Engine.SPLASHSCREEN_FADE_TIME, Phaser.Easing.Linear.None, true, 0, 0, true);

        splashTween.onComplete.add( this.splashComplete, this );
    },

    splashComplete: function(){
        console.log("splash complete");
        this.game.state.start( "Game" );
    },

    destroy: function(){
        this.game.tweens.removeAll();
        this.game.splash.destroy();
    }
};