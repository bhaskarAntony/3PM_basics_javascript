console.log("this is the exteranal script file");

//scope
var firstVariable = 20; //declartion

const secondvariable = 33;//declartion

let thirdVariable = 40;

//printing all variable values is document not in console(if u print to print console we can console.log) but we are printing in document so document.write

document.write(`<h1>firstvaiable value is ${firstVariable}</h1>`)//20
document.write(`<h1>secondvariable value is ${secondvariable}</h1>`)//33
document.write(`<h1>thirdVariable value is ${thirdVariable}</h1>`)//40



if(secondvariable > firstVariable){ //33>20  -> true
    document.write(`<h1>Condition is true</h1>`)
    document.write(`<h1>firstvaiable value is ${firstVariable}</h1>`)//20
    document.write(`<h1>secondvariable value is ${secondvariable}</h1>`)//33
    document.write(`<h1>thirdVariable value is ${thirdVariable}</h1> <hr>`)//40

    //declaring variable inside the block ({})
    var fourthVariable = 100; //weak variable because of var keyword
    let fifthVariable = 200;
    const sixthVariable = 300;

    document.write(`<h1>fourthVariable value is ${fourthVariable}</h1>`);//100
    document.write(`<h1>fifthVariable value is ${fifthVariable}</h1>`);//200
    document.write(`<h1>sixthVariable value is ${sixthVariable}</h1>`);//300
}


document.write(`<h1>printing block scope variable outside of the block</h1>`)
document.write(`<h1 style="color:green">fourthVariable value is ${fourthVariable}</h1>`) //100 because fourthvariable we decalred by using var

document.write(`<h1 style="color:green">fifthVariable value is ${fifthVariable}</h1>`)
//script.js:38 Uncaught ReferenceError: fifthVariable is not defined
// at script.js:38:66

document.write(`<h1 style="color:green">sixthVariable value is ${sixthVariable}</h1>`)
// script.js:38 Uncaught ReferenceError: fifthVariable is not defined
//     at script.js:38:66
