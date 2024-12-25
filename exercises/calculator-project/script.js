const add = function (val1, val2) {
  return parseInt(val1) + parseInt(val2);
};

const subtract = function (val1, val2) {
  return parseInt(val1) - parseInt(val2);
};

const multiply = function (val1, val2) {
  return parseInt(val1) * parseInt(val2);
};

const divide = function (val1, val2) {
  return parseInt(val1) / parseInt(val2);
};

let result = 0;

function operate(val1, val2, operator) {
//   console.log(val1, val2, operator);
  if (operator == "+") {
    result = add(val1, val2);
  } else if (operator == "-") {
    result = subtract(val1, val2);
  } else if (operator == "*") {
    result = multiply(val1, val2);
  } else if (operator == "÷") {
    result = divide(val1, val2);
  } else {
    PopulateDisplay(result);
  }
}

const display = document.querySelector("#display");
let displayedNum = 0;

display.textContent = displayedNum;

function PopulateDisplay(number) {
  displayedNum = number;

  display.textContent = displayedNum;
  result = 0;
}

const number_buttons = document.querySelectorAll(".number");

let pushed_buttons = [];
let second_num = "";
number_buttons.forEach((button) =>
  button.addEventListener("click", () => {
    // if(pushed_buttons.length < 2){
    //     pushed_buttons.push(button.textContent);
    // }
    if (opbutton != "") {
      //   console.log(button.textContent);
      //   console.log(opbutton);
      second_num += button.textContent;
    //   console.log(second_num);
     

      
    } else {
      if (display.textContent == "0") {
        display.textContent = "";
      }

      display.textContent += button.textContent;
    }
  })
);

const operation_buttons = document.querySelectorAll(".operation");

let opbutton = "";

operation_buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.textContent == "=") {
        operate(display.textContent, second_num, opbutton);
        second_num = "";
      PopulateDisplay(result);
    }else{
       
    opbutton = button.textContent;
    console.log(second_num);
    

    }



    
   
  })
);

const clear_button = document.querySelector(".CLEAR");

clear_button.addEventListener("click", () => {
  PopulateDisplay(0);
  opbutton = "";
});


// gelecekteki kutaya not. 12 + 7 - basıldığı zaman 19a evaluate etmeli..