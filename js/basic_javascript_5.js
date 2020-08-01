function function_1() {
    document.getElementById("Test").innerHTML = 0/0;
}

function function_2() {
    document.getElementById("Test2").innerHTML = isNaN('Pie is not a number');
}

function function_3() {
    document.getElementById("Test3").innerHTML = isNaN('3.14');
}

function not_Function() {
    document.getElementById("not").innerHTML = ! (7>6);
}

document.write(typeof 3.14);
document.write("<br>");

document.write("50" + 3);
document.write("<br>");

z=10
y=10
x="10"
document.write(z===x);
document.write("<br>");
document.write(z==y);
document.write("<br>");

document.write(z===x);
document.write("<br>");

document.write(7>6 && 4>3);
document.write("<br>");

document.write(6>3 || 4<3);
document.write("<br>");