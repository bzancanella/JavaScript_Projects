function add_4() {
    var y = 7;
    document.write(y + 4 + "<br>");
}
var z = 17;
function add_y() {
    document.write(10 + y);
}

add_4()
add_y()

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function new_Year() {
    if (new Date().getFullYear() <= 2020) {
        document.getElementById("Year").innerHTML = "2020 isn't over yet.";
    }
}

function guess_Function() {
    Guess = document.getElementById("Guess").value;
    if (Guess == 7) {
            attempt = "You are correct, 7 is my favorite number!";
    }
    else {
        attempt = "That is incorrect, please try again.";
    }
    document.getElementById("Favorite").innerHTML = attempt;
}

function time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}