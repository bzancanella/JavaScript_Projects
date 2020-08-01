function my_Dictionary() {
    var Vegetable = {
        Type:"Tomato",
        Season:"Summer",
        Sun:"Full Sun"
    };
    document.getElementById("Dictionary").innerHTML = Vegetable.Type
}

function my_Dictionary2() {
    var Pepper = {
        Type:"Jalapeno",
        Season:"Summer",
        Sun:"Full Sun"
    };
    delete Pepper.Sun;
    document.getElementById("sun").innerHTML = Pepper.Sun;
}