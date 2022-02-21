import { JsBlock } from './js.block.js'
import { TimerBlock } from './timer-block'

export default class App {
    #JsBlock
    #TimerBlock
    constructor() {
        this.#JsBlock = new JsBlock();
        this.#TimerBlock = new TimerBlock(new Date(1996, 6, 18));
    }
    run () {
        const timerBlockHTML = this.#TimerBlock.render();
        const jsBlockHTML = this.#JsBlock.render();
        document.body.append(jsBlockHTML, timerBlockHTML);
    }
}