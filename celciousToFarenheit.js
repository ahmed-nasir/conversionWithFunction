// Celcius to Farenheit 

function celciusToFarenheit(celcius) {
    let farenheit = (celcius * 1.8) + 32;
    return farenheit.toFixed(2); //fixed floating number at 2 digit after pont(.)
}
console.log(celciusToFarenheit(36));

// Farenheit to celcius

function farenheitToCelcius(farenheit) {
    let celcius = (farenheit - 32) * 0.5555556;
    return celcius.toFixed(2);//fixed floating number at 2 digit after pont(.)
}
console.log(farenheitToCelcius(96));