import { Animation, range, SpriteSheet } from "excalibur";
import { Enemy } from "./Enemy.js";
import { Resources } from "./resources.js";

export class Penguin extends Enemy {
    constructor(scoreCounter) {
        super(scoreCounter, 'penguin');
        this.speed = 50;
        this.detectionRadius = 150;
    }

    onInitialize(engine) {
        const spriteSheetRight = SpriteSheet.fromImageSource({
            image: Resources.PenguinWalkRight,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 16,
                spriteHeight: 16
            }
        });

        this.animations = {
            idleRight: Animation.fromSpriteSheet(spriteSheetRight, range(0, 4), 100),
            idleLeft: Animation.fromSpriteSheet(spriteSheetRight, range(0, 4), 100)
        };

        this.animations.idleLeft.flipHorizontal = true;

        super.onInitialize(engine);
    }
}
