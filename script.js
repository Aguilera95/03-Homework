
function generate(){

   
    let complexity = document.getElementById("slider").value;
    
    let values ="ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
let password = "";


for(var i = 0; i <= complexity; i++){

    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
}


document.getElementById("display").value = password;



document.getElementById("lastNums").innerHTML +=password + "<br/>";
}



document.getElementById("lenght").innerHTML = "Lenght: 25";



document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
    document.getElementById("lenght").innerHTML = "lenght" + document.getElementById("slider").value;
}
else {

    document.getElementById("lenght").innerHTML = "lenght: 1";
}

}



function copyPassword() {

    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");



}