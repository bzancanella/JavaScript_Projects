function addFunction() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

function subFunction() {
    var subtraction = 5 - 2;
    document.getElementById("subMath").innerHTML = "5 - 2 = " + subtraction;
}

function multiply() {
    var simple_Math = 6 * 8;
    document.getElementById("times").innerHTML = "6 * 8 = " + simple_Math;
}

function division() {
        var more_Math = 48 / 6;
        document.getElementById("divide").innerHTML = "48 / 6 = " + more_Math;
}

function comp_Math () {
    var super_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("another_math").innerHTML = "1 plus 2, mutliplied by 10, divide in half and the subtracted by 5 equals " + super_math;
}
function modulus_Operator () {
        var mod_Math = 25 % 6;
        document.getElementById("mod_op").innerHTML = "When you divide 25 by 6 you have a remainder of: " + mod_Math;
}

function negation_Operator () {
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}

function plusplus() {
    var y = 7
    y++;
    document.getElementById("plus").innerHTML = "Increasing count of 7 by 1 equals " + y
}

function minusminus() {
    var z = 10
    z--;
    document.getElementById("minus").innerHTML = "Decreasing count of 10 by 1 equals " + z
}

function random() {
    window.alert(Math.random() * 100);
}

