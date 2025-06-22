import { ImageSource, Loader } from 'excalibur';
import { TiledResource } from '@excaliburjs/plugin-tiled';

// voeg hier jouw eigen resources toe
const Resources = {

    
    RedMoonPotion: new ImageSource('images/redMoonPotion.png'),
    PinkMoonPotion: new ImageSource('images/pinkMoonPotion.png'),
    PurpleMoonPotion: new ImageSource('images/purpleMoonPotion.png'),
    BlueMoonPotion: new ImageSource('images/blueMoonPotion.png'),
    BlackMoonPotion: new ImageSource('images/blackMoonPotion.png'),
    TurquoiseMoonPotion: new ImageSource('images/turquoiseMoonPotion.png'),
    YellowMoonPotion: new ImageSource('images/yellowMoonPotion.png'),
    Map: new TiledResource('images/season.tmx'),
    StartScene: new ImageSource('images/introScene.png'),
    GameOver: new ImageSource('images/gameOverScene.png'),
    Instruction: new ImageSource('images/instructionScene.png'),
    End: new ImageSource('images/endScene.png'),


    PlayerIdleRight: new ImageSource('images/B_witch_right_idle.png'),
    PlayerIdleLeft: new ImageSource('images/B_witch_left_idle.png'),
    PlayerRunRight: new ImageSource('images/B_witch_right_run.png'),
    PlayerRunLeft: new ImageSource('images/B_witch_left_run.png'),
    PlayerDamageRight: new ImageSource('images/B_witch_right_damage.png'),
    PlayerDamageLeft: new ImageSource('images/B_witch_left_damage.png'),
    // PlayerDeathRight: new ImageSource('images/B_witch_right_death.png'),
    // PlayerDeathLeft: new ImageSource('images/B_witch_left_death.png'),
    // PlayerAttackRight: new ImageSource('images/B_witch_right_attack.png'),
    // PlayerAttackLeft: new ImageSource('images/B_witch_left_attack.png'),
    PlayerCharge: new ImageSource('images/B_witch_right_charge.png'),


    SkeletonIdleLeft: new ImageSource('images/S_right_idle.png'),
    SkeletonIdleRight: new ImageSource('images/S_right_idle.png'),
    SkeletonDeathLeft: new ImageSource('images/S_left_death.png'),
    SkeletonDeathRight: new ImageSource('images/S_right_death.png'),
    SkeletonHurtLeft: new ImageSource('images/S_left_hurt.png'),
    SkeletonHurtRight: new ImageSource('images/S_right_hurt.png'),
    PumpkinIdleRight: new ImageSource('images/PUM_right_idle.png'),
    PumpkinIdleLeft: new ImageSource('images/PUM_left_idle.png'),
    PumpkinWalkRight: new ImageSource('images/PUM_right_walk.png'),
    PumpkinWalkLeft: new ImageSource('images/PUM_left_walk.png'),
    PumpkinHurtRight: new ImageSource('images/PUM_right_hurt.png'),
    PumpkinHurtLeft: new ImageSource('images/PUM_left_hurt.png'),
    PumpkinDeathRight: new ImageSource('images/PUM_right_death.png'),
    PumpkinDeathLeft: new ImageSource('images/PUM_left_death.png'),

    PenguinIdleRight: new ImageSource('images/P_right_idle.png'),
    PenguinIdleLeft: new ImageSource('images/P_left_idle.png'),
    PenguinWalkRight: new ImageSource('images/P_right_walking.png'),
    PenguinWalkLeft: new ImageSource('images/P_right_walking.png'),
    PenguinSlideRight: new ImageSource('images/P_right_slide.png'),
    PenguinSlideLeft: new ImageSource('images/P_left_slide.png'),
    PenguinHurtRight: new ImageSource('images/P_right_hurt.png'),
    PenguinHurtLeft: new ImageSource('images/P_left_hurt.png'),
    PenguinDeathRight: new ImageSource('images/P_right_death.png'),
    PenguinDeathLeft: new ImageSource('images/P_left_death.png'),

    FairyIdleRight: new ImageSource('images/F_right_idle.png'),
    FairyIdleLeft: new ImageSource('images/F_left_idle.png'),
    FairyRunRight: new ImageSource('images/F_right_run.png'),
    FairyRunLeft: new ImageSource('images/F_left_run.png'),
    FairyDeathRight: new ImageSource('images/F_right_death.png'),
    FairyDeathLeft: new ImageSource('images/F_left_death.png'),
  




}

const ResourceLoader = new Loader([


    
    Resources.RedMoonPotion,
    Resources.PlayerIdleLeft,
    Resources.PlayerIdleRight,
    Resources.PlayerRunLeft,
    Resources.PlayerRunRight,
    Resources.PlayerCharge,
    Resources.Map,
    Resources.StartScene,
    Resources.Instruction,
    Resources.End,
    Resources.GameOver,
    Resources.PinkMoonPotion,
    Resources.PurpleMoonPotion,
    Resources.BlueMoonPotion,
    Resources.BlackMoonPotion,
    Resources.YellowMoonPotion,
    Resources.TurquoiseMoonPotion,
    Resources.SkeletonIdleLeft,
    Resources.SkeletonIdleRight,
    Resources.SkeletonDeathLeft,
    Resources.SkeletonDeathRight,
    Resources.SkeletonHurtLeft,
    Resources.SkeletonHurtRight,
    Resources.PumpkinIdleRight,
    Resources.PumpkinWalkRight,
    Resources.PumpkinHurtRight,
    Resources.PumpkinDeathRight,
    Resources.PumpkinIdleLeft,
    Resources.PumpkinWalkLeft,
    Resources.PumpkinHurtLeft,
    Resources.PumpkinDeathLeft,
    Resources.PenguinIdleRight,
    Resources.PenguinWalkRight,
    Resources.PenguinSlideRight,
    Resources.PenguinHurtRight,
    Resources.PenguinDeathRight,
    Resources.PenguinIdleLeft,
    Resources.PenguinWalkLeft,
    Resources.PenguinSlideLeft,
    Resources.PenguinHurtLeft,
    Resources.PenguinDeathLeft,
    Resources.FairyIdleRight,
    Resources.FairyRunRight,
    Resources.FairyDeathRight,
    Resources.FairyIdleLeft,
    Resources.FairyRunLeft,
    Resources.FairyDeathLeft,



])

export { Resources, ResourceLoader };