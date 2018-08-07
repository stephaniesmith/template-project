import html from '/js/html.js';
import Counter from './counter.js';

let template = function() {
    return html`
        <header>
            <h1>Demo Project</h1>
            <div></div>
        </header>

        <main></main>
    `;
};

export default class App {
    constructor() {
        this.count = 0;
    }
    render() {
        let dom = template();

        let appCount = dom.querySelector('header > div');
        appCount.textContent = this.count;

        let counterProps = {
            count: this.count,
            onDecrement: () => {
                this.count --;
                appCount.textContent = this.count;
                const updateProps = {
                    count: this.count
                };
                counter.update(updateProps);
            },
            onIncrement: () => {
                this.count ++;
                appCount.textContent = this.count;
                const updateProps = {
                    count: this.count
                };
                counter.update(updateProps);            }
        };

        const counter = new Counter(counterProps);
        const main = dom.querySelector('main');
        main.appendChild(counter.render());

        return dom;
    }
}