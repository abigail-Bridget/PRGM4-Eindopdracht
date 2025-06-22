import { Scene, Vector } from 'excalibur';
import { Engine, Loader } from 'excalibur';
import { Resources } from './resources.js';
import { Player } from './Player.js';
import {Skeleton} from './Skeleton.js'
import {Penguin} from './Penguin.js'
import { Fairy} from './Fairy.js'
import { Pumpkin } from './Pumpkin.js'
import { MoonPotion } from './MoonPotion.js';
import { Score } from './score.js';

export class MainGameScene extends Scene {

    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize() {
        this.FillMainScene();
    }

    restartMainGameScene() {
        this.scorecounter.resetScore();
        this.clear();
        this.FillMainScene();
    }

    FillMainScene() {
        this.scorecounter = new Score();
        this.scorecounter.pos = new Vector(40, 40);
        this.scorecounter.visible = true;
        this.scorecounter.z = 999;
        this.add(this.scorecounter);

        // Potions data: positie + kleur
        const potionsData = [
            { pos: new Vector(96, 768), kleur: 'red' },
            { pos: new Vector(576, 160), kleur: 'pink' },
            { pos: new Vector(1792, 800), kleur: 'purple' },
            { pos: new Vector(1248, 96), kleur: 'blue' },
            { pos: new Vector(1248, 1728), kleur: 'black' },
            { pos: new Vector(96, 1792), kleur: 'turquoise' },
            { pos: new Vector(640, 1088), kleur: 'yellow' },
        ];

       

        // Voeg de potions toe
        this.spawnPotions(potionsData);

        // Voeg map toe
        Resources.Map.addToScene(this);

        // Voeg speler toe
        const player = new Player(this.game);
        player.z = 8;
        player.pos = new Vector(300, 600);
        this.add(player);

        const skeleton1 = new Skeleton(this.scorecounter);
        player.z = 8;
        skeleton1.pos = new Vector(1345, 1171);
        this.add(skeleton1);

        const skeleton2 = new Skeleton(this.scorecounter);
        player.z = 8;
        skeleton2.pos = new Vector(1391, 1757);
        this.add(skeleton2);

        const skeleton3 = new Skeleton(this.scorecounter);
        player.z = 8;
        skeleton3.pos = new Vector(1775, 1465);
        this.add(skeleton3);

        const penguin1 = new Penguin(this.scorecounter);
        player.z = 8;
        penguin1.pos = new Vector(750,1139);
        this.add(penguin1);

        const penguin2 = new Penguin(this.scorecounter);
        player.z = 8;
        penguin2.pos = new Vector(117, 1416);
        this.add(penguin2);

        const penguin3 = new Penguin(this.scorecounter);
        player.z = 8;
        penguin3.pos = new Vector(407, 1538);
        this.add(penguin3);

        const pumpkin1 = new Pumpkin(this.scorecounter);
        player.z = 8;
        pumpkin1.pos = new Vector(358, 849);  
        this.add(pumpkin1);

        const pumpkin2 = new Pumpkin(this.scorecounter);
        player.z = 8;
        pumpkin2.pos = new Vector(135, 384);  
        this.add(pumpkin2);

        const pumpkin3 = new Pumpkin(this.scorecounter);
        player.z = 8;
        pumpkin3.pos = new Vector(664, 218);
        this.add(pumpkin3);

        const fairy1 = new Fairy(this.scorecounter);
        player.z = 8;
        fairy1.pos = new Vector(1333, 407);
        this.add(fairy1);

        const fairy2 = new Fairy(this.scorecounter);
        player.z = 8;
        fairy2.pos = new Vector(1633, 355);
        this.add(fairy2);

        const fairy3 = new Fairy(this.scorecounter);
        player.z = 8;
        fairy3.pos = new Vector(1349, 307);
        this.add(fairy3);

       
    

        this.updateCamera(player);
    }

    // Eén functie om potions te maken en toe te voegen
    spawnPotions(potions) {
        potions.forEach(data => {
            const potion = new MoonPotion(this.scorecounter, data.kleur);
            potion.z = 1;
            potion.pos = data.pos.clone();
            this.add(potion);
        });
    }

    updateCamera(player) {
        this.camera.strategy.lockToActor(player);
        this.camera.zoom = 3;
    }
}

// Clamp functie (kan blijven zoals je had)
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}