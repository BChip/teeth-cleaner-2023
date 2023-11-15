import Phaser from 'phaser';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';
import four from './assets/4.png';
import five from './assets/5.png';
import six from './assets/6.png';
import seven from './assets/7.png';
import eight from './assets/8.png';
import nine from './assets/9.png';
import ten from './assets/10.png';
import eleven from './assets/11.png';
import twelve from './assets/12.png';
import thirteen from './assets/13.png';
import fourteen from './assets/14.png';
import fifteen from './assets/15.png';
import sixteen from './assets/16.png';
import seventeen from './assets/17.png';
import eighteen from './assets/18.png';
import nineteen from './assets/19.png';
import twenty from './assets/20.png';
import twentyone from './assets/21.png';
import twentytwo from './assets/22.png';
import cross from './assets/cross.png';

class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {

        //  This is an example of a bundled image:
        this.load.image('1', one);
        this.load.image('2', two);
        this.load.image('3', three);
        this.load.image('4', four);
        this.load.image('5', five);
        this.load.image('6', six);
        this.load.image('7', seven);
        this.load.image('8', eight);
        this.load.image('9', nine);
        this.load.image('10', ten);
        this.load.image('11', eleven);
        this.load.image('12', twelve);
        this.load.image('13', thirteen);
        this.load.image('14', fourteen);
        this.load.image('15', fifteen);
        this.load.image('16', sixteen);
        this.load.image('17', seventeen);
        this.load.image('18', eighteen);
        this.load.image('19', nineteen);
        this.load.image('20', twenty);
        this.load.image('21', twentyone);
        this.load.image('22', twentytwo);

        this.load.image('cross', cross);

    }

    create() {
        this.add.image(400, 150, '1');
        this.add.image(400, 150, '2');
        this.add.image(400, 150, '3');
        this.add.image(400, 150, '4');
        this.add.image(400, 150, '5');
        this.add.image(400, 150, '6');
        this.add.image(400, 150, '7');
        this.add.image(400, 150, '8');
        this.add.image(400, 150, '9');
        this.add.image(400, 150, '10');
        this.add.image(400, 150, '11');
        this.add.image(400, 150, '12');
        this.add.image(400, 150, '13');
        this.add.image(400, 150, '14');
        this.add.image(400, 150, '15');
        this.add.image(400, 150, '16');
        this.add.image(400, 150, '17');
        this.add.image(400, 150, '18');
        this.add.image(400, 150, '19');
        this.add.image(400, 150, '20');
        this.add.image(400, 150, '21');
        this.add.image(400, 150, '22');

        // make image 21 yellow
        this.add.image(400, 150, '21').setTint(0xfffc00);

        // make image 9 red
        this.add.image(400, 150, '1').setTint(0xff0000);

        // make image 4 purple
        this.add.image(400, 150, '4').setTint(0x7e00ff);

        // make cross smaller
        const cross = this.add.image(400, 150, 'cross').setScale(0.1);

        // cross follow mouse
        this.input.on('pointermove', function (pointer) {

            cross.x = pointer.x;
            cross.y = pointer.y;

        }, this);

        // hide mouse cursor
        this.input.setDefaultCursor('none');

    }

    update() {

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
