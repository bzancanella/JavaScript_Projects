function best_player (character) {
    var bestPlayer = character.getAttribute("data-best-player");
    alert(bestPlayer + " is the best player on the " + character.innerHTML + ".");
}
