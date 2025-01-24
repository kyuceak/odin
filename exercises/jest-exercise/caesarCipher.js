const caesarCipher = (str,shiftFactor) => {
    let output = "";


    for(let i = 0; i < str.length; i++)
    {
        let ascii = str[i].charCodeAt();


        if((ascii >= 65 && ascii <= 90) || (ascii >=97 && ascii <= 122))
        {
            ascii += shiftFactor;
            if((ascii > 90 && str[i] <= 'Z') || ascii > 122)
            {
                ascii -= 26;
            }
        }
        output += String.fromCharCode(ascii);
    }
    return output;
}

module.exports = caesarCipher;