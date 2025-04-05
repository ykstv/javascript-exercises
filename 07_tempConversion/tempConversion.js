const convertToCelsius = function(Ftemperature) {
  return Number.parseFloat((Ftemperature - 32) * (5/9)).toFixed(1) * 1
};

const convertToFahrenheit = function(Ctemperature) {
  return Number.parseFloat((Ctemperature * (9/5)) + 32).toFixed(1) * 1
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
