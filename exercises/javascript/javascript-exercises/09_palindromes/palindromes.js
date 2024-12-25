const palindromes = function (str) {


    // let reversestr = str.split("").reverse().join("");

    let strArray = str.split("");

    let cleaned_arr = strArray.filter( char => /[a-zA-Z0-9]/.test(char) );

    let cleanedStr = cleaned_arr.join("");

    let cleanedReverseStr = cleaned_arr.reverse().join("");

    console.log(typeof cleanedStr);
    
    if(cleanedStr.toLowerCase() === cleanedReverseStr.toLowerCase()){
        return true;
    }else {
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
