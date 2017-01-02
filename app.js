/*var num = 24.332223;
var num = num.toString();
if (num.charAt(num.length - 1 === "5")) {
     num = num.slice(0, num.length -1) + "6" ;

}
else
{
    num = Number(num);
    num = num.toFixed(2);
}
console.log(num);

var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolk";
for (var i = 0; i < text.length; i++) {
    if(text.slice(i, i+12) == "World War II"){
              text = text.slice(0,i) +"The Second World War"+ text.slice(i, 12);
              console.log(text);
    }
}

var firstName = prompt("Enter your Name");
firstName = firstName.charAt(firstName.length - 1);
alert("Last Character of string is "+firstName);

var merchTot = +prompt("Enter your merchant amount ");

function calcTot(merchTot) {
    var orderTot;
if(merchTot >= 100){
orderTot = merchTot;
}
else if (merchTot < 50.01){
orderTot = merchTot + 5;
}
else {
orderTot = merchTot + 5 + (0.3 * (merchTot-50));
}
console.log("Order Total is: "+orderTot);
return orderTot;
}
var save = calcTot(88);
var sum = save + 5;
console.log("sum is "+sum);
var a = 0, b = 1;
document.write(a+" "+b);
var input = +prompt("Enter No");
for (var i = 2; i < input; i++){
    var result = a+b;
    document.write(" "+result);
    a = b;
    b = result;
}

*/
function greeting(){
    alert("Hi");
}
