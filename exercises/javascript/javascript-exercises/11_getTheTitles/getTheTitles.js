const getTheTitles = function(bookArr) {

    titleArr = [];

    bookArr.forEach( (element) => {

        titleArr.push(element.title);
    });

    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
