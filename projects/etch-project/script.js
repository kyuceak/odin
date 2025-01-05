const container = document.querySelector(".container");

for (let i = 0; i < 20; i++) {
  const squarediv = document.createElement("div");

  squarediv.classList.add("box")

  squarediv.style.width = "16px";
  squarediv.style.height = "16px";
  container.appendChild(squarediv);
}


function add_style(){
    const my_boxes = document.querySelectorAll(".box");

console.log(my_boxes)

my_boxes.forEach( box => {
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "blue";
    });

    box.addEventListener("mouseleave", () => {
        box.style.backgroundColor = "";
    });
    
});
}



const button = document.querySelector("#askbutton");

button.addEventListener("click", () => {
    const num_square = prompt("How many squares do you want?");
    container.innerHTML = "";
    console.log(num_square);

    for (let i = 0; i < num_square; i++) {
        const squarediv = document.createElement("div");
      
        squarediv.classList.add("box")
      
        squarediv.style.width = "16px";
        squarediv.style.height = "16px";
        container.appendChild(squarediv);
        add_style()
      }
});

