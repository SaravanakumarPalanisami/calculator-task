function add(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1)+parseInt(num2);
    console.log(result);
    document.getElementsByClassName("output")[0].innerHTML="ADDITION IS"+result;

}
function sub(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1)-parseInt(num2);
    console.log(result);
    document.getElementsByClassName("output")[0].innerText="subN IS"+result;

}
function mul(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1)*parseInt(num2);
    console.log(result);
    document.getElementsByClassName("output")[0].innerHTML="multON IS"+result;

}
function div(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1)/parseInt(num2);
    console.log(result);
    document.getElementsByClassName("output")[0].innerHTML="divisionN IS"+result;

}
