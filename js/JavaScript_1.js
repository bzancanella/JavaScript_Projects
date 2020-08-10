function color_function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color!";
    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
        break;
        case "Yellow":
            color_output = "Yellow" + color_string;
        break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Blue":
            color_output = "Blue" + color_string;
        break;
        case "Pink":
            color_output = "Pink" + color_string;
        break;
        case "Purple":
            color_output = "Purple" + color_string;
        break;
        default:
        color_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML=color_output;
}

function textchange() {
    var A = document.getElementsByClassName("change");
    A[0].innerHTML= "The text has changed!";
}

var c = document.getElementById("id_name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0, 2*Math.PI);
ctx.stroke();

var grd=ctx.createLinearGradient(0,0,500,250);
grd.addColorStop(0, "green");
grd.addColorStop(.5, "Yellow");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);