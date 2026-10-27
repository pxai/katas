import Frame from './frame';

export default class Game {
    public frames: Frame[];
    constructor () {
        this.frames = Array(10).fill(new Frame())
    }
}