window.alert("Thank you for viewing my JavaScript test-run.")  //Welcome popup

var A = "Here is where";        //Defines a vaiable and assigns it a string value
var B = " we concatenate our variables."    //Definates a variable and assigns it a string value
document.write(A + B);      //Concatenates the two variables and displays the expression on screen

function testrun () {                 //Defines a function and names it
    var str = "Have a great day!";            //Defines a variable and assigns it a string value
    var result = str.fontcolor("blue");        //Uses the fontcolor method on the string variable
    document.getElementById("good_day").innerHTML = result;   //Puts the value of the result into HTML element with the "good_day" id
}

