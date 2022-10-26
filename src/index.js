import { dom } from '../New.js';

var cunt = 0;

function count() {
    return `
        <p>Counter: ${cunt}</p>
    `;
}

var main = dom.create(document.getElementById("root"));

document.getElementById("inc").addEventListener('event', function() {
	cunt++
	main.render(count);
});

main.render(count);
