function WhatIsj()
{
    console.log("J is Javascript's Library written By Jainil Soni.\nJ Library has a lots of functions like CSS,Console,Logical and more functions.\nIt is an opensource library");
}


// ===================
// console functions
// ===================

//print any data in console
//Parameter: COmpulsory
function jConsoleLog(parameter)
{
    return console.log(parameter);
}

//show data in table format
//Parameter: Compulsory
function jConsoleTable(parameter)
{
    return console.table(parameter);
}

//clears the console
//Parameter: None
function jConsoleClear()
{
    return console.clear();
}


//it counts all the count in a loop
// Parameter: as your wish
function jConsoleCount(parameter)
{
    return console.count(parameter);
}

//Throws error
// Parameter: as your wish
function jConsoleError(parameter)
{
    return console.error(parameter);
}

//Throws warning
// Parameter: as your wish
function jConsoleWarn(parameter)
{
    return console.warn(parameter);
}

// ===================
// dialog functions
// ===================

//Alert something
// Parameter: as your wish
function jAlert(parameter)
{
    return alert(parameter);
}


//Alert something
// Parameter: as your wish
function jPrompt(parameter)
{
    let j = prompt(parameter);

    if(j)
    {
        return console.log(true);
    }
    else
    {
        return console.log(false);
    }

}

//Alert something
// Parameter: as your wish
function jConfirm(parameter)
{
    let j = prompt(parameter);

    if(j)
    {
        return console.log(true);
    }
    else
    {
        return console.log(false);
    }
}


// ===================
// css helper functions
// ===================

//must read
//if element is a tag then pass just tag name
//if element is a class then add dot (.) sign before the element name in parameter
//if element is an id then add has (#) sign before the element name in parameter




//Change the background color of an element 
//pass color name as second parameter
//Parameter: pass the element as a parameter which you wanna change color
function jBackground(parameter,color)
{
    document.querySelector(parameter).style.background = color;
}


//Change the color of an element
//pass color name as second parameter
//Parameter: pass the element as a parameter which you wanna change color
function jColor(parameter,color)
{
    document.querySelector(parameter).style.color = color;
}


//Change the height of an element
function jHeight(parameter,height)
{
    document.querySelector(parameter).style.height = height;
}


//Change the width of an element
function jWidth(parameter,width)
{
    document.querySelector(parameter).style.width = width;
}


//Change the width and height of an element
function jHeightWidth(parameter,height,width)
{
    document.querySelector(parameter).style.height = height;
    document.querySelector(parameter).style.width = width;
}



// ===================
// Helper Logical Function
// ===================

//swaping function
//pass two values to swap

function jSwap(number1,number2)
{
    let swap = number1;
    number1 = number2;
    number2 = swap;

    return console.log(number1,number2)
}


//returns the bigger value
function jBigger(number1,number2)
{
    return console.log(number1 > number2 ? number1 : number2);
}

//returns the smaller value
function jSmaller(number1,number2)
{
    return console.log(number1 < number2 ? number1 : number2);
}







// ===================
// Other Function
// ===================


//to use bootstrap
function jBootstrap()
{
    let bootstrapCss = document.createElement('link');
    bootstrapCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css";
    bootstrapCss.rel = "stylesheet";
    bootstrapCss.integrity = "sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor";
    bootstrapCss.crossOrigin = "anonymous";

    let bootstrapJs = document.createElement('script');
    bootstrapJs.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js";
    bootstrapJs.integrity = "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2";
    bootstrapJs.crossOrigin = "anonymous";

    document.body.appendChild(bootstrapCss);
    document.body.appendChild(bootstrapJs);
}

//redirect

function jRedirect(parameter)
{
     window.open(parameter);
}


//return to back

function jBack()
{
    history.back()
}


// hide whole page
function jHideHTML()
{
    document.querySelector('html').style.visibility = "hidden";
}

function jDie()
{
    return false;
}

function jDay()
{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let today = date.getDay();

    return days[today];
}

function jDate()
{
    
    let date = new Date();
    let day = date.getDate();

    return day;
}

function jMonth()
{
    let date = new Date();
    let month = date.getMonth();

    return month + 1;
}

function jMonthName()
{
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = new Date();
    let month = date.getMonth();

    return months[month + 1];
}

function jYear()
{
    let date = new Date();
    let year = date.getFullYear();

    return year;
}

function jFullDate()
{
    return jDate() + "-" + jMonth() + "-" + jYear();
}

function jInterval(parameter,time)
{
    return setInterval(parameter,time);
}

function jTimeout(parameter,time)
{
    return setTimeout(parameter,time);
}


//suport python in your html Web Page
function jPyScript()
{

    let pyCss = document.createElement('link');
    pyCss.href = "https://pyscript.net/alpha/pyscript.css";
    pyCss.rel = "stylesheet";

    
    let pyJs = document.createElement('script');
    pyJs.src = "https://pyscript.net/alpha/pyscript.js";

    document.body.append(pyCss);
    document.body.append(pyJs);

}
