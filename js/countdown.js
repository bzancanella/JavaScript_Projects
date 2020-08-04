function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("We're leaving together, but still it's farewell. And maybe we'll come back to earth, who can tell?");
    }
        }
    tick();
}