class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){

        //texture au fond
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');

        //au lieu d'écrire 5 ligne quasi identiques on charge l'herbe avec un boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }


    }
    create(){

        // fond avec une trame
        let bgAnimationA=this.add.image(0,0, 'bg-animation-a').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        //contient tous les éléments du background 2
        this.bg2Container=this.add.container(0,0);

        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);

        let bg2Tree2=this.add.image(400,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès

        //--------------background 1 (gris) --------------------

        //contient tous les éléments du background 1
        this.bg1Container=this.add.container(0,0);
        let bg1Terrain3=this.add.image(-300,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        //-------------ground (premier plan noir)---------------------------

        //contient tous les éléments du premier plan
        this.groundContainer=this.add.container(0,0);
        //un arbre
        let tree1=this.add.image(300,350, 'gTree1').setOrigin(0,1);
        tree1.setTintFill(0xFF0000,0xFF0000,0xFF0000,0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        let gMid2=this.add.image(gMid1.x+gMid1.width+1,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        //de l'herbe en textures qui se répète
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        //encore de l'herbe
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        this.initKeyboard();
        this.cameras.main.setBounds(0, 0, 2000, 540);
        bgAnimationA.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;


    }

    /**
     * Initialise ce qui se passe quand on appuie ou relache une touche du clavier
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=-1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=0;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed;
    }


}