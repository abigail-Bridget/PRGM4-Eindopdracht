import { Engine, Loader } from 'excalibur';
import { Resources } from './resources.js';
import { MainGameScene } from './MainGameScene.js';


const loader = new Loader(Object.values(Resources));

const game = new Engine({
    width: 800,
    height: 600,
});

game.start(loader).then(() => {
    game.addScene('main', new MainGameScene(game));
    game.goToScene('main');
});
