/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
       // this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        //this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gStone2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gWoodenbridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gBox2', 'assets/level/ground/g-box-2.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gSpike1', 'assets/level/ground/g-spike-1.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        this.load.image('filterFilm1', 'assets/level/filters/film/frame-1.png');
        this.load.image('filterFilm2', 'assets/level/filters/film/frame-2.png');
        this.load.image('filterFilm3', 'assets/level/filters/film/frame-3.png');

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-300,60, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        bg2Terrain2.scale=1.2
        // coline D
        let bg2Terrain1=this.add.image(650,140, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);



        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(350,-40, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=0; //pencher l'arbre de -5 degrès
        bg2Tree2.scale=0.5

        let bg2Tree3=this.add.image(750,-20, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-5; //pencher l'arbre de -5 degrès
        bg2Tree3.scale=0.7
        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-430,180, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1Terrain1=this.add.image(660,330, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.scale=0.4

        let bg1Tree3=this.add.image(130,-100, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree3.angle=0; //pencher l'arbre de -5 degrès
        bg1Tree3.scale=0.6

        let bg1Tree1=this.add.image(-20,-50, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree1.angle=0; //pencher l'arbre de -5 degrès
        bg1Tree1.scale=0.6

        let bg1terrain4=this.add.image(-40,480, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1terrain4);
        bg1terrain4.angle=-5; //pencher l'arbre de -5 degrès




        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let spike1=this.add.image(445,445, 'gSpike1').setOrigin(0,0);
        this.groundContainer.add(spike1);
        spike1.scale=1

        let spike1a=this.add.image(600,445, 'gSpike1').setOrigin(0,0);
        this.groundContainer.add(spike1a);
        spike1a.scale=1


        let water=this.add.image(440,630, 'gWater').setOrigin(0,1);
        this.groundContainer.add(water);
        water.scale=1
        
        let tree2=this.add.image(250,353, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.scale=0.6

        let tree2g=this.add.image(1,353, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2g);
        tree2g.scale=0.8
        tree2g.flipX=true

        let stone4=this.add.image(350,380, 'gStone4').setOrigin(0,1);
        this.groundContainer.add(stone4);
        stone4.scale=0.8

        let stone2=this.add.image(345,362, 'gStone2').setOrigin(0,1);
        this.groundContainer.add(stone2);

        let mushroom1=this.add.image(120,350, 'gMushroom1').setOrigin(0,1);
        this.groundContainer.add(mushroom1);
        mushroom1.scale=1
        mushroom1.angle=10

        let left=this.add.image(800,380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(left);
        left.scale=0.9

        let tree1=this.add.image(850,400, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree1);
        tree1.scale=0.9
        tree1.angle=-10
        tree1.flipX=true

        let woodenbridge=this.add.image(420,300, 'gWoodenbridge').setOrigin(0,0);
        this.groundContainer.add(woodenbridge);
        woodenbridge.scale=0.8

        let stone4a=this.add.image(810,395, 'gStone4').setOrigin(0,1);
        this.groundContainer.add(stone4a);
        stone4a.scale=0.8

        let box2=this.add.image(515,293, 'gBox2').setOrigin(0,0);
        this.groundContainer.add(box2);
        box2.scale=0.6
        box2.angle=5







        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions

        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);




        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(50,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1 // -1 correspond a l'infini
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode) // = if , dans le cas ou tel touche est pressé
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
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
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
