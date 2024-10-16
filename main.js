/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';


function to_fahrenheit(celcius) {
let fahrenheit = Math.round(celcius * 9/5) + 32;
return fahrenheit;
    }


function to_celcius(fahrenheit) {
    let celcius = Math.round(fahrenheit - 32) * 5/9;
    return celcius;
    }





    // Dont know how to do this yet //
function  roll_dice(qty, sides) {
let RandInt = Math.round(Math.random(qty * sides))
return sum
    }  





    // percent of something, ex: 5-10 on a test = 50% //
function percent(correct, total) {
let score = correct/total;
    console.log(Math.round(score * 100) + "%");
    return score
}





// return the area of a circle given the radius //
function area_circle(radius) {
let area = Math.PI * radius**2;
return area;
}


// return the volume of a cylinder given the radius and height//
function cylinder(radius, height) {
    let volume = area_circle(radius) * height;
    return volume;
}





function pythagorean_heorem(height, width) {
return Math.sqrt(height**2 + width**2);
}






function round(value, decimals) {
 value = value * 10**decimals;
 value = Math.round(value);
 value = value / 10**decimals;
 return value;
}