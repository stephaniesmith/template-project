import html from '/js/html.js';

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
        return dom;
    }
}