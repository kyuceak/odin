





const submit = document.querySelector("#btn-submit");




document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#myform");
    const inputs = document.querySelectorAll("input");



    const validateInput = (input) => {
        
      
     
        if(input.checkValidity()){
            input.classList.add("valid");
            input.classList.remove("invalid");
        }
        else{
            input.classList.add("invalid");
            input.classList.remove("valid");
        }

    };

    inputs.forEach( (input) => {


        input.addEventListener("input", () => {
            
          
            validateInput(input)
        });
        input.addEventListener("blur", () => validateInput(input)); 
    });



    form.addEventListener("submit", () => {

    });

});