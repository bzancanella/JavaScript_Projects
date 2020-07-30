function testrun () {
    var str = "BOOM! There it goes again!";
    var result = str.fontcolor("blue");
    document.getElementById("test").innerHTML = result;
}

function soze () {
    var sentence = "Poof!";
    sentence += " he was gone.";
    document.getElementById("concatenate").innerHTML = sentence;
}