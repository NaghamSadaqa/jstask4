var exchangeForm = document.querySelector(".exchangeForm");
var array=[];
exchangeForm.onsubmit = convert;
  

function convert(e){
    e.preventDefault();
    var elements = e.target.elements;
   var amount = elements['amount'].value;
   var options = document.querySelector(".exchange").value;
   var dollar= amount*3;
   var dinar= amount*5;
   var nis= amount*1;

   var result=" ";
   if(options=='dollar'){
    result+=`${dollar}`;
   }else if(options=='dinar'){
    result+=`${dinar}`;
   }else if(options=='nis'){
    result+=`${nis}`;
   }
   
   document.querySelector(".result").innerHTML=result;
}
