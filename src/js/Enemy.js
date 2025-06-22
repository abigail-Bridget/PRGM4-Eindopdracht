import { Actor, CollisionType, Vector } from "excalibur";
import { Player } from "./Player.js";

export class Enemy extends Actor {
    constructor(scoreCounter, type) {
        super({
            width: 32,
            height: 32,
            collisionType: CollisionType.Active,
        });

        this.type = type;
        this.scoreCounter = scoreCounter;
        this.speed = 50;
        this.detectionRadius = 150;

        this.animations = {}; 
        this.direction = new Vector(0, 0);
    }

    onInitialize(engine) {
        this.engine = engine;

        this.on('collisionstart', (evt) => {
            if (evt.other instanceof Player) {
                evt.other.takeDamage?.(); 
            }
        });

        this.pickRandomDirection();
        this.graphics.use(this.animations.idleRight ?? null);
    }

    pickRandomDirection() {
        const directions = [
            new Vector(1, 0), new Vector(-1, 0),
            new Vector(0, 1), new Vector(0, -1),
            new Vector(0, 0)
        ];
        this.direction = directions[Math.floor(Math.random() * directions.length)];
    }

    updateDirectionToPlayer(player) {
        const distance = this.pos.distance(player.pos);
        if (distance < this.detectionRadius) {
            this.direction = player.pos.sub(this.pos).normalize();
        }
    }

    updateAnimation() {
        if (this.direction.x > 0 && this.animations.idleRight) {
            this.graphics.use(this.animations.idleRight);
        } else if (this.direction.x < 0 && this.animations.idleLeft) {
            this.graphics.use(this.animations.idleLeft);
        }
    }

    onPreUpdate(engine, delta) {
        const player = engine.currentScene.actors.find(a => a instanceof Player);
        if (!player) return;

        this.updateDirectionToPlayer(player);
        this.updateAnimation();

        this.vel = this.direction.scale(this.speed);
    }
}