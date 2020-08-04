function call_loop() {
    var i = 1
    var counting = ""
    while (i <= 3) {
        counting += i + " Mississippi <br>";
        i++;
    }
    document.getElementById("loop").innerHTML = counting;
}

var str = "This is the end";
var n = str.length;
document.getElementById("length").innerHTML= n;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Pictures = [];
    Cat_Pictures[0]="sleeping";
    Cat_Pictures[1]="playing";
    Cat_Pictures[2]="eating";
    Cat_Pictures[3]="purring";
    document.getElementById("cat").innerHTML= "In this picture, the cat is " + Cat_Pictures[2] + ".";
}

function array_Function() {
    var Ice = ["chocolate", "vanilla", "neopolitan", "tin roof sundae", "mint chocolate chip"];
    document.getElementById("Array").innerHTML= "In my opinion, " + Ice[4] + " ice cream is the best.";

}

function const_Function() {
    const vegetable = {type:"tomato", color:"red", season:"summer"};
    vegetable.dtm = "70"
    vegetable.dtm = "65-80"
    document.getElementById("Constant").innerHTML= "A " + vegetable.type + " is best grown during " + vegetable.season + 
    ". They usually ripen in " + vegetable.dtm + " days, when they turn " + vegetable.color + "."
}

function return_Function(name) {
    return "Good afternoon " + name + "!"
}
document.getElementById("return").innerHTML= return_Function("Bryan");

let guitar = {
    maker: "Ibanez ",
    model: "Prestige ",
    strings: "7-string ",
    pickups: "humbuckers ",
    color: "Dark Tide Blue ",
    description: function() {
        return "This guitar is a " + this.maker + this.model + this.strings +
        "with " + this.pickups + "pickups, and comes in " + this.color
        }
};
document.getElementById("guitar").innerHTML= guitar.description();

function break_Function() {
    var f;
    var btext = "";
    for (f = 1; f < 7; f++) {
        if (f === 4) { break; }
        btext += f + ", ha ha ha... <br>";
    }
    document.getElementById("break").innerHTML= btext;
}

function cont_Function() {
    var e;
    var unlucky = "";
    for (e = 0; e < 17; e++) {
        if (e === 13) { continue; }
        unlucky += e + " is the luckiest number. <br>";
    }
    document.getElementById("continue").innerHTML= unlucky;
}