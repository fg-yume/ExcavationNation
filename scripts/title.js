"use strict";

var Title = function(game){
    console.log( "%cTitle screen state!", "color:green, background:white" );

    this.gameButton = null;
};

Title.prototype = {
    preload: function(){
        // Game Resources ----

        // Char ---
        this.load.image("player", "img/player.png" );

        // Bgs ---
        this.load.image("background", "img/bgs/background.png");

        // Sprites ---
        this.load.image('bullet', 'img/bullet.png');
        this.load.image('bullet2', 'img/bullet2.png');
        this.load.image('rune1', 'img/rune1.png');
        this.load.image('rune2', 'img/rune2.png');
        this.load.image('rune3', 'img/rune3.png');
        this.load.spritesheet('playersprite', 'img/playersprite.png', 34, 36);

        // Enemies
        this.load.spritesheet( "ranged_enemy", "img/alraunesprite.png", 36, 37);
        // TODO: other enemies
        
        // Audio ---
        this.load.audio('soundtrack', 'audio/Magical_Girl.wav');

        // TODO ---
        //this.load.audio('energyBall', 'audio/MagicalGirl-EnergyBall#3.wav');
        //his.load.audio('itemPickup', 'audio/MagicalGirl-ItemPickup.wav');
        //this.load.audio('jellySquish', 'audio/MagicalGirl-JellySquish.wav');
        //this.load.audio('ow', 'audio/MagicalGirl-Ow.wav');
    },

    create: function(){
        var title_img = this.game.add.sprite( 0, 0, "title_img" );

        // Clickable area -- Game
        this.gameButton = new Phaser.Rectangle( 0, 0, 100, 100 );

        this.pointer = this.input.mousePointer;
        this.keyboard = this.input.keyboard;
    },

    destroy: function(){
        //this.title_img.destroy();
        //this.gameButton.destroy();
    },

    update: function(){
        // if( !this.pointer.isDown )
        // {
        //     return;
        // }

        // if( this.gameButton.contains( this.pointer.clientX, this.pointer.clientY ) )
        // {
        //     console.log("test")
        //     //this.game.state.start( "Game" );
        // }
        if( this.keyboard.isDown(71) ) 
        {
            this.game.state.start( "Game" );
        }
    }
};