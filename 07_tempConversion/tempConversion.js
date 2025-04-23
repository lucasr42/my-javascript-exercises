const convertToCelsius = function(temp) {
    // c = (f-32) * 1/1.8
    if (isNaN(temp)) return -1;
    const celsius = parseFloat(((temp-32) * (1/1.8)).toFixed(1));
    console.log(celsius);
    return celsius;
};

const convertToFahrenheit = function(temp) {
    // f = c*1.8 + 32
    if (isNaN(temp)) return -1;
    const fahrenheit = parseFloat((temp * 1.8 + 32).toFixed(1));
    console.log(fahrenheit);
    return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
