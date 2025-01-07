export default function contactTab() {
    const div = document.createElement('div');
    div.classList.add('contact');

    const h3 = document.createElement('h3');
    h3.textContent = 'Contact Us';

    const p = document.createElement('p');
    p.textContent = "Get in touch with us! You can reach us via phone, email, or visit our restaurant in person.";

    div.appendChild(h3);
    div.appendChild(p);

    return div;
}
