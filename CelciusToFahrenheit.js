// converted celcius to fahrenheit
function getCelcius(celcius) {
    const getFahrenheit = (celcius * 9 / 5) + 32;
    return getFahrenheit;
}
const inputCelcius = 2;
const getFahrenheitOutput = getCelcius(inputCelcius);
console.log(getFahrenheitOutput, 'Fahrenheit in', inputCelcius, 'degree Celcius');










