const convertToCelsius = function(fahrenheit) {

  result = (fahrenheit - 32) * (5/9)

  let rounded = Math.round(result * 10) / 10;

  return  rounded;
};

const convertToFahrenheit = function(celcius) {

  result = (celcius * (9/5)) + 32;


  let rounded = Math.round(result * 10) / 10;

  return rounded;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
