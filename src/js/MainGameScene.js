import { Scene, Vector } from 'excalibur';
import { Resources } from './resources.js';
import { Player } from './Player.js';
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

        // Camera instellen op speler
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