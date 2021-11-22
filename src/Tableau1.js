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
        // page 2
        this.load.image('bg2-terrain-4', 'assets/level/background-2/bg2-terrain-4.png');





        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg1-terrain-2', 'assets/level/background-1/bg-terrain-2.png');
        // page 2
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-woodenbridge', 'assets/level/background-1/bg-wooden-bridge.png');
        //this.load.image('bg1-stone-3', 'assets/level/background-1/bg-stone-3.png');


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
        this.load.image('gLiane1', 'assets/level/ground/g-vine-a.png');
        this.load.image('gLiane2', 'assets/level/ground/g-vine-b.png');
        this.load.image('gLiane3', 'assets/level/ground/g-vine-c.png');
        // + zombies page 1
        this.load.image('gZ1', 'assets/zombies/z1.png');
        this.load.image('gZ6', 'assets/zombies/z6.png');
        this.load.image('gZ5', 'assets/zombies/z5.png');
        this.load.image('gZ8', 'assets/zombies/z8.png');

        // page 2
        this.load.image('gFellentree1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gStone1', 'assets/level/ground/g-stone-1.png');


        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        this.load.image('filterBloody1', 'assets/level/filters/bloody/frame1.png');
        this.load.image('filterBloody2', 'assets/level/filters/bloody/frame2.png');
        this.load.image('filterBloody3', 'assets/level/filters/bloody/frame3.png');



        this.load.image('filterframe1', 'assets/level/weather/rain/frame1.png');
        this.load.image('filterframe2', 'assets/level/weather/rain/frame2.png');
        this.load.image('filterframe3', 'assets/level/weather/rain/frame3.png');

        this.load.image('Snowframe1', 'assets/level/weather/snow/frame1.png');
        this.load.image('Snowframe2', 'assets/level/weather/snow/frame2.png');
        this.load.image('Snowframe3', 'assets/level/weather/snow/frame3.png');
        this.load.image('Snowframe4', 'assets/level/weather/snow/frame4.png');
        this.load.image('Snowframe5', 'assets/level/weather/snow/frame5.png');

        // BOY waiting
        this.load.image('Idle1-1', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-1.png');
        this.load.image('Idle1-2', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-2.png');
        this.load.image('Idle1-3', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-3.png');
        this.load.image('Idle1-4', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-4.png');
        this.load.image('Idle1-5', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-5.png');
        this.load.image('Idle1-6', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-6.png');
        this.load.image('Idle1-7', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-7.png');
        this.load.image('Idle1-8', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-8.png');
        this.load.image('Idle1-9', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-9.png');
        this.load.image('Idle1-10', 'assets/Characters/boy/boy-style-1/PNG/idle/idle1-10.png');

        // BOY run
        this.load.image('Run1-1', 'assets/Characters/boy/boy-style-1/PNG/run/run1-1.png');
        this.load.image('Run1-2', 'assets/Characters/boy/boy-style-1/PNG/run/run1-2.png');
        this.load.image('Run1-3', 'assets/Characters/boy/boy-style-1/PNG/run/run1-3.png');
        this.load.image('Run1-4', 'assets/Characters/boy/boy-style-1/PNG/run/run1-4.png');
        this.load.image('Run1-5', 'assets/Characters/boy/boy-style-1/PNG/run/run1-5.png');
        this.load.image('Run1-6', 'assets/Characters/boy/boy-style-1/PNG/run/run1-6.png');
        this.load.image('Run1-7', 'assets/Characters/boy/boy-style-1/PNG/run/run1-7.png');
        this.load.image('Run1-8', 'assets/Characters/boy/boy-style-1/PNG/run/run1-8.png');

        // Enemy1
        this.load.image('Enemy1-1', 'assets/Characters/enemy1/PNG/idle/enemy1-1.png');
        this.load.image('Enemy1-2', 'assets/Characters/enemy1/PNG/idle/enemy1-2.png');
        this.load.image('Enemy1-3', 'assets/Characters/enemy1/PNG/idle/enemy1-3.png');
        this.load.image('Enemy1-4', 'assets/Characters/enemy1/PNG/idle/enemy1-4.png');
        this.load.image('Enemy1-5', 'assets/Characters/enemy1/PNG/idle/enemy1-5.png');
        this.load.image('Enemy1-6', 'assets/Characters/enemy1/PNG/idle/enemy1-6.png');
        this.load.image('Enemy1-7', 'assets/Characters/enemy1/PNG/idle/enemy1-7.png');
        this.load.image('Enemy1-8', 'assets/Characters/enemy1/PNG/idle/enemy1-8.png');
        this.load.image('Enemy1-9', 'assets/Characters/enemy1/PNG/idle/enemy1-9.png');
        this.load.image('Enemy1-10', 'assets/Characters/enemy1/PNG/idle/enemy1-10.png');






        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

        //this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

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
        /**
         * vitesse deplacement player
         * @type {number}
         */
        this.speedX=0;

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

        // page 2
        let bg2Terrain4=this.add.image(1300,120, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);
        bg2Terrain4.scale=0.9




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
        // page 2

        let bg2Tree2a=this.add.image(1560,-100, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2a);
        bg2Tree2a.angle=0; //pencher l'arbre de -5 degrès
        bg2Tree2a.scale=0.7

        let bg2Tree2b=this.add.image(1750,-100, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2b);
        bg2Tree2b.angle=0; //pencher l'arbre de -5 degrès
        bg2Tree2b.scale=1.8
        bg2Tree2b.flipX=true




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

        let bg1Terrain1=this.add.image(660,300, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.scale=0.6

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

        //page 2

        let bg1terrain4a=this.add.image(1100,120, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1terrain4a);
        bg1terrain4a.angle=30; //pencher l'arbre de -5 degrès
        bg1terrain4a.scale=0.9

        let bg1terrain2=this.add.image(800,300, 'bg1-terrain-2').setOrigin(0,0);
        this.bg1Container.add(bg1terrain2);
        bg1terrain2.angle=0; //pencher l'arbre de -5 degrès
        bg1terrain2.scale=0.5

        let bg1terrain3a=this.add.image(1600,220, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1terrain3a);
        bg1terrain3a.angle=0; //pencher l'arbre de -5 degrès
        bg1terrain3a.scale=0.6

        let bg1Terrain1a=this.add.image(1630,210, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1a);
        bg1Terrain1a.scale=0.4
        bg1Terrain1a.angle=-5

        let bg1Tree2a=this.add.image(1750,-4, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2a);
        bg1Tree2a.angle=0; //pencher l'arbre de -5 degrès
        bg1Tree2a.scale=0.6

        let bg1Tree2b=this.add.image(1900,-8, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2b);
        bg1Tree2b.angle=0; //pencher l'arbre de -5 degrès
        bg1Tree2b.scale=0.6
        bg1Tree2b.scaleY=0.8

        let bg1Tree3a=this.add.image(1150,-8, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3a);
        bg1Tree3a.angle=0; //pencher l'arbre de -5 degrès
        bg1Tree3a.scale=0.6


        let bg1woodenbridge=this.add.image(1280,255, 'bg1-woodenbridge').setOrigin(0,0);
        this.bg1Container.add(bg1woodenbridge);
        bg1woodenbridge.angle=-5; //pencher l'arbre de -5 degrès
        bg1woodenbridge.scale=1
        bg1woodenbridge.scaleY=0.8

        let animationIdleEnemy = this.add.sprite(600, 160, 'animationIdleEnemy').setOrigin(0,0);
        this.anims.create({
            key: 'IdleEnemy',
            frames: [
                {key:'Enemy1-1'},
                {key:'Enemy1-2'},
                {key:'Enemy1-3'},
                {key:'Enemy1-4'},
                {key:'Enemy1-5'},
                {key:'Enemy1-6'},
                {key:'Enemy1-7'},
                {key:'Enemy1-8'},
                {key:'Enemy1-9'},
                {key:'Enemy1-10'},
            ],
            frameRate: 16,
            repeat: -1
        });
        animationIdleEnemy.play('IdleEnemy');
        animationIdleEnemy.flipX=true;
        animationIdleEnemy.scale=0.5
        animationIdleEnemy.angle=-10
        this.bg1Container.add(animationIdleEnemy);





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

        // lianne 1
        let vine101=this.add.image(500,-10, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine101);
        vine101.scale=0.7

        let vine102=this.add.image(500,20, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine102);
        vine102.scale=0.7

        let vine103=this.add.image(505,50, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine103);
        vine103.scale=0.7

        let vine104=this.add.image(505,80, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine104);
        vine104.scale=0.7

        let vine105=this.add.image(500,110, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine105);
        vine105.scale=0.7

        let vine106=this.add.image(500,140, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine106);
        vine106.scale=0.7

        let vine107=this.add.image(505,170, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine107);
        vine107.scale=0.7

        // lianne 2
        let vine201=this.add.image(550,-10, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine201);
        vine201.scale=0.7

        let vine202=this.add.image(550,20, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine202);
        vine202.scale=0.7

        let vine203=this.add.image(555,50, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine203);
        vine203.scale=0.7

        let vine204=this.add.image(555,80, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine204);
        vine204.scale=0.7

        //  Zombie page 1

        let Zombie1=this.add.image(600,251, 'gZ1').setOrigin(0,0);
        this.groundContainer.add(Zombie1);
        Zombie1.scale=0.7
        Zombie1.flipX=true
        Zombie1.angle=-5

        let Zombie8=this.add.image(535,90, 'gZ8').setOrigin(0,0);
        this.groundContainer.add(Zombie8);
        Zombie8.scale=0.6
        Zombie8.angle=-5

        // page 2

        let gMid1a=this.add.image(950,380, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1a);
        let gMid1b=this.add.image(1150,380, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1b);


        let gRight=this.add.image(1320,380, 'gRight').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gRight);
        gRight.scaleX=1.5

        let gLefta=this.add.image(1850,410, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLefta);

        let gFellentree1=this.add.image(1550,305, 'gFellentree1').setOrigin(0,0);
        this.groundContainer.add(gFellentree1);
        gFellentree1.scale=0.8
        gFellentree1.angle=8

        let gtree2=this.add.image(1000,-2, 'gTree2').setOrigin(0,0);
        this.groundContainer.add(gtree2);
        gtree2.scale=0.7

        let gStone1=this.add.image(1000,350, 'gStone1').setOrigin(0,0);
        this.groundContainer.add(gStone1);
        gStone1.scale=2
        gStone1.flipX=true
        gStone1.scaleX=3

        let gmushroom1a=this.add.image(1400,350, 'gMushroom1').setOrigin(0,0);
        this.groundContainer.add(gmushroom1a);
        gmushroom1a.scale=0.5

        let spike1b=this.add.image(1600,415, 'gSpike1').setOrigin(0,0);
        this.groundContainer.add(spike1b);
        spike1b.scale=1.3

        let gMid1c=this.add.image(1600,510, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1c);
        gMid1c.scaleX=1.3

        // + zombie
        let Zombie6=this.add.image(1075,300, 'gZ6').setOrigin(0,0);
        this.groundContainer.add(Zombie6);
        Zombie6.scale=0.4
        Zombie6.angle=0

        let Zombie5=this.add.image(1655,220, 'gZ5').setOrigin(0,0);
        this.groundContainer.add(Zombie5);
        Zombie5.scale=0.7
        Zombie5.angle=10




        this.player = this.add.sprite(28, 130, 'animationIdle1').setOrigin(0,0);
        this.anims.create({
            key: 'idle1',
            frames: [
                {key:'Idle1-1'},
                {key:'Idle1-2'},
                {key:'Idle1-3'},
                {key:'Idle1-4'},
                {key:'Idle1-5'},
                {key:'Idle1-6'},
                {key:'Idle1-7'},
                {key:'Idle1-8'},
                {key:'Idle1-9'},
                {key:'Idle1-10'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.player.play('idle1');
        this.player.scale=0.6


        this.anims.create({
            key: 'run',
            frames: [
                {key:'Run1-1'},
                {key:'Run1-2'},
                {key:'Run1-3'},
                {key:'Run1-4'},
                {key:'Run1-5'},
                {key:'Run1-6'},
                {key:'Run1-7'},
                {key:'Run1-8'},
            ],
            frameRate: 16,
            repeat: -1
        });

















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

         this.filterFilm = this.add.sprite(0, 0, 'filterBloody1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterBloody1'},
                {key:'filterBloody2'},
                {key:'filterBloody3'},
            ],
            frameRate: 16,
            repeat: -1 // -1 correspond a l'infini
        });
        this.filterFilm.play('weather');


        //pas fini

         this.filterRain = this.add.sprite(0, 0, 'filterRain').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'filterframe1'},
                {key:'filterframe2'},
                {key:'filterframe3'},
            ],
            frameRate: 16,
            repeat: -1 // -1 correspond a l'infini
        });
        this.filterRain.play('rain');

        this.filterSnow = this.add.sprite(0, 0, 'filterSnow').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'snow',
            frames: [
                {key:'Snowframe1'},
                {key:'Snowframe2'},
                {key:'Snowframe3'},
                {key:'Snowframe4'},
                {key:'Snowframe5'},
            ],
            frameRate: 16,
            repeat: -1 // -1 correspond a l'infini
        });
        this.filterSnow.play('snow');



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
        this.filterRain.scrollFactorX=0;
        this.filterSnow.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.filterRain.visible=false;
        this.filterSnow.visible=false;
        this.bg2Container.scrollFactorX=0;
        this.bg1Container.scrollFactorX=0.8;
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
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.filterRain.visible= false;
                    me.filterSnow.visible= false;

                    break;

                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.filterRain.visible= true;
                    me.filterSnow.visible= false;

                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.filterRain.visible= false;
                    me.filterSnow.visible= true;
                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.speedX=1;
                    me.player.play('run');
                    me.player.flipX=false;
                break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.speedX=-1;
                    me.player.play('run');
                    me.player.flipX=true;
                    break;






            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.player.play('idle1');
                    me.speedX=0;
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
        this.player.x+=this.speedX;
    }


}
