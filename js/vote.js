function vote_Function() {
    var age, can_Vote;
    age = document.getElementById("age").value;
    can_Vote = (age < 18) ? "You are to young":"You are old enough";
    document.getElementById("vote").innerHTML = can_Vote + " to vote.";
}