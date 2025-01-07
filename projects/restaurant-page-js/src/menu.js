export default function menuTab() {
    const div = document.createElement('div');
    div.classList.add('menu');

    const h3 = document.createElement('h3');
    h3.textContent = "Our Menu";

    const ul = document.createElement('ul');
    const items = ['Porridge', 'Honey Cakes', 'Forest Fruits'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    div.appendChild(h3);
    div.appendChild(ul);

    return div;
}
