import { JsBlock } from './js.block.js';
import { TimerBlock } from './timer-block';
import { JS_CREATION_DATE } from '../core/constants/settings.js';

export default class App {
    #JsBlock
    #TimerBlock
    constructor() {
        this.#JsBlock = new JsBlock();
        this.#TimerBlock = new TimerBlock(new Date(JS_CREATION_DATE));
    }
    run () {
        const timerBlockHTML = this.#TimerBlock.render();
        const jsBlockHTML = this.#JsBlock.render();
        document.body.append(jsBlockHTML, timerBlockHTML);
    }
}