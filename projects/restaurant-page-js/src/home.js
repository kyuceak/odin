
import foodimage from "./food3.jpg";

export default function homeTab() {
    const div = document.createElement('div');
    div.classList.add('desc');

    const h3 = document.createElement('h3');
    h3.textContent = "Kutay's Restaurant";

    const p = document.createElement('p');
    p.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

    div.appendChild(h3);
    div.appendChild(p);
    

    const img = document.createElement('img');
    img.src = foodimage;

    const container = document.createElement('div');
    container.setAttribute("id","content");
    container.appendChild(div);
    container.appendChild(img);

    return container;
}
