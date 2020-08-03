function full_Sentence() {
    var part1 = "I am ";
    var part2 = "looking forward ";
    var part3 = "my upcoming ";
    var part4 = "vacation.";
    var result = part1.concat(part2, part3, part4);
    document.getElementById("combine").innerHTML = result;
}

function slice_it_up() {
    var Sentence = "The hills are alive with the sound of music";
    var Section = Sentence.slice(29, 43);
    document.getElementById("Slice").innerHTML = Section;
}

function convert_Upper() {
    var str1 = "Never do all caps.";
    var str2 = str1.toUpperCase();
    document.getElementById("case").innerHTML = str2;
}

function find_it() {
    var str = "Arabian nights, like Arabian days";
    var pos = str.search("days");
    document.getElementById("search").innerHTML = pos;
}

function convert_String() {
    var z =133;
    document.getElementById("numbers").innerHTML = z.toString();
}

function prec_Method() {
    var y = 3.14159265;
    document.getElementById("precise").innerHTML= y.toPrecision(3);
}

function convert_Money() {
    var x = 9.395;
    document.getElementById("fixed").innerHTML = x.toFixed(2);
}

function value_of() {
    var v = 457
    document.getElementById("value").innerHTML = v.valueOf();
}