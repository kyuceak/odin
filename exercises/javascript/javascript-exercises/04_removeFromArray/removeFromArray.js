const removeFromArray = function(arr,...index) {
    

    const ind_array = index;

    for(let i = 0; i < index.length; i++){
     
        

        arr = arr.filter( item => item !== index[i])
    }
    
    return arr;
    
};



// Do not edit below this line
module.exports = removeFromArray;
