import html from '/js/html.js';
import Counter from './counter.js';

let template = function() {
    return html`
        <header>
            <h1>Demo Project</h1>
        </header>

        <main></main>
    `;
};

export default class App {
    render() {
        let dom = template();

        const counter = new Counter();
        const main = dom.querySelector('main');
        main.appendChild(counter.render());

        return dom;
    }
}