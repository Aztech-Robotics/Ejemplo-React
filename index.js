// var---let---const
var a=3;
a=5;
console.log("A:"+ a);
const clicked=()=>{
    console.log("arrow function");
}
function funcion2() {
    console.log("funcion 2");
}
const funcion3= function(){
    console.log("funcion 3")
}
document.getElementById("callfuncion").onclick= clicked;