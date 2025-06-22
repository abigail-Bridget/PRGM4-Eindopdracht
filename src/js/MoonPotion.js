import { Actor, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Player } from "./Player.js";

export class MoonPotion extends Actor {
    constructor(scorecounter, kleur) {
        // Pas grootte en sprite aan op basis van kleur
        let width = 10;
        let height = 20;
        let sprite;
        switch (kleur) {
            case 'red':
                sprite = Resources.RedMoonPotion.toSprite();
                break;
            case 'blue':
                width = 20;
                height = 32;
                sprite = Resources.BlueMoonPotion.toSprite();
                break;
            case 'pink':
                sprite = Resources.PinkMoonPotion.toSprite();
                break;
            case 'purple':
                sprite = Resources.PurpleMoonPotion.toSprite();
                break;
            case 'black':
                sprite = Resources.BlackMoonPotion.toSprite();
                break;
            case 'turquoise':
                sprite = Resources.TurquoiseMoonPotion.toSprite();
                break;
            case 'yellow':
                sprite = Resources.YellowMoonPotion.toSprite();
                break;
            default:
                sprite = Resources.RedMoonPotion.toSprite();
        }

        super({
            width: width,
            height: height,
            collisionType: CollisionType.Passive,
        });

        this.scorecounter = scorecounter;
        this.sprite = sprite;
    }

    onInitialize(engine) {
        this.graphics.use(this.sprite);
        this.on('collisionstart', (evt) => this.onCollisionStart(evt));
        this.z = 7;
    }

    onCollisionStart(evt) {
        if (evt.other instanceof Player) {
            this.scorecounter.updateScore();
            this.kill();
        }
    }
}