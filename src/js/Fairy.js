import { Animation, range, SpriteSheet } from "excalibur";
import { Enemy } from "./Enemy.js";
import { Resources } from "./resources.js";

export class Fairy extends Enemy {
    constructor(scoreCounter) {
        super(scoreCounter, 'fairy');
        this.speed = 70;
        this.detectionRadius = 150;
        
    }

    onInitialize(engine) {
        const spriteSheetRight = SpriteSheet.fromImageSource({
            image: Resources.FairyIdleRight,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 32,
                spriteHeight: 32
            }
        });

        this.animations = {
            idleRight: Animation.fromSpriteSheet(spriteSheetRight, range(0, 3), 100),
            idleLeft: Animation.fromSpriteSheet(spriteSheetRight, range(0, 3), 100)
        };

        this.animations.idleLeft.flipHorizontal = true;

        super.onInitialize(engine);
    }
}
