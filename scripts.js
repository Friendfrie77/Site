function responsivenav(){
    var nav = document.getElementById("test");
    if (nav.className === "row navtest") {
        nav.className += " responsive";
    } else{
        nav.className = "row navtest";
    }
    }
    
function comingsoon(){
    alert("This feature is coming soon");
}


