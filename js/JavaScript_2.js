function validateForm() {
    var x = document.forms["lions_form"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out.");
        return false;
    }
    var y = document.forms["lions_form"]["lname"].value;
    if (y == "") {
        alert("Name must be filled out.");
        return false;
    }
}

