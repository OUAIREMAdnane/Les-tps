var div = document.getElementById("divsel");
var oui = document.querySelector("#oui");
var non = document.querySelector("#non");
var nome = document.querySelector("#name");
var msg = document.querySelector("#msg");
var sub = document.querySelector("#sub");
var frm = document.querySelector("#frm");

var exp = new RegExp('^[A-z]+$','g');

nome.onblur = function(){
    if(exp.test(nome.value)==true)
    {
      msg.innerText="le nome est validé";
    }
    else
    {
        msg.innerText="le nome est non validé";
    sub.addEventListener("click", function(){
        event.preventDefault()
      },false);

    }
}



oui.onchange = function(){

    if(oui.checked){
        div.style.display="block";
    }

}

non.onchange = function(){

    if(non.checked){
        div.style.display="none";
    }

}