const findTheOldest = function(peopleArr) {


    ageArr = [];  

    peopleArr.forEach( people => {

        if(people.yearOfDeath != undefined)
        {
            let age = people.yearOfDeath - people.yearOfBirth;
            ageArr.push(age);
        }else {
            
            const currYear = new Date().getFullYear();

            let age = currYear - people.yearOfBirth;

            ageArr.push(age);
        }
        
        
    });

     
    let max = ageArr[0];

    for(let i = 0; i < ageArr.length -1; i++){
        
        if(ageArr[i] < ageArr[i+1]){
            max = ageArr[i+1];
        }
    };


    let ind = ageArr.indexOf(max);


    return peopleArr[ind];


};

// Do not edit below this line
module.exports = findTheOldest;
