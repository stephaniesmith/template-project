import html from '/js/html.js';

let template = function() {
    return html`
        <button class="decrement">-</button>
        <span>0</span>
        <button class="increment">+</button>
   `;
};

export default class Counter {
    constructor(props) {
        this.count = 0;
    }

    render() {
        const dom = template();

        const decrement = dom.querySelector('button.decrement');
        const increment = dom.querySelector('button.increment');
        const countSpan = dom.querySelector('span');

        decrement.addEventListener('click', () => {
            this.count --;
            countSpan.innerText = this.count;
        });
        increment.addEventListener('click', () => {
            this.count ++;
            countSpan.innerText = this.count;
        });


        return dom;
    }
}