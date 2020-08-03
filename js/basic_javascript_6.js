function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Rider(Name, Tall) {
    this.Rider_Name = Name;
    this.Rider_Tall = Tall;
}
var Bryan = new Rider("Bryan", 175);
var Judith = new Rider("Judith", 162);
var Moses = new Rider("Moses", 51);
function tallFunction() {
    document.getElementById("New_and_This").innerHTML = 
    Judith.Rider_Name + " is " + Judith.Rider_Tall + "cm tall.";
}

function mult_Function() {
    document.getElementById("Nested_Function").innerHTML = Multiply();
    function Multiply() {
        var Base = 5;
        function Times_5() {Base *= 5;}
        Times_5();
        return Base;
    }
}