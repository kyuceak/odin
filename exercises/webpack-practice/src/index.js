// index.js
import "./styles.css";
import odinImage from "./odin.png";
import { greeting } from "./greeting.js";

console.log(greeting);




   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);
