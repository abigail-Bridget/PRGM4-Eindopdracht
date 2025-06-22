import { Animation, range, SpriteSheet } from "excalibur";
import { Enemy } from "./Enemy.js";
import { Resources } from "./resources.js";

export class Skeleton extends Enemy {
    constructor(scoreCounter) {
        super(scoreCounter, 'skeleton');
        this.speed = 40;
        this.detectionRadius = 150;
    }

    onInitialize(engine) {
        const spriteSheetRight = SpriteSheet.fromImageSource({
            image: Resources.SkeletonIdleRight,
            grid: {
                rows: 1,
                columns: 9,    
                spriteWidth: 32,  
                spriteHeight: 32   
            }
        });

        this.animations = {
            idleLeft: Animation.fromSpriteSheet(spriteSheetRight, range(0, 8), 100),
            idleRight: Animation.fromSpriteSheet(spriteSheetRight, range(0, 8), 100)
        };

        // Spiegeling voor rechts
        this.animations.idleLeft.flipHorizontal = true;

        super.onInitialize(engine);
    }
}