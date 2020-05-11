function move1(){
  location.href="#currentoperation";
document.getElementById("calc").addEventListener("click",sin);
}
function move2(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",cos);
}
function move3(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",tan);  
}
function move4(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",log);   
}
function move5(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",pow);   
}
function move6(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",x2);   
}
function move7(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",exp);   
}
function move8(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",sqrt);   
}
function move9(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",per);   
}
function move10(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",fact);   
}
function move11(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",mod);   
}
function move12(){
 location.href="#currentoperation"; document.getElementById("calc").addEventListener("click",round);   
}

function sin(){
  var x=document.getElementById("in").value;
 var a=Math.sin(x*Math.PI/180);
document.querySelector("#out").textContent=a;
}
function cos(){
  var x=document.getElementById("in").value;
 var a=Math.cos(x*Math.PI/180);
 document.querySelector("#out").textContent=a;
}
function tan(){
  var x=document.getElementById("in").value;
 var a=Math.tan(x* Math.PI/180);
 document.querySelector("#out").textContent=a; 
}
function log(){
  var x=document.getElementById("in").value;
 var a=Math.log(x);
 document.querySelector("#out").textContent=a;  
}

function pow(){
  var x=document.getElementById("in").value;
  var y=new Array();
  y=x.split(" ");
 var a=Math.pow(y[0],y[1]);
 document.querySelector("#out").textContent=a; 
}
function x2(){
 var x=document.getElementById("in").value;
 var a = x * 2;
 document.querySelector("#out").textContent=a; 
}
function exp(){
var x=document.getElementById("in").value;
 var a= Math.exp(x);
 document.querySelector("#out").textContent=a;   
}
function sqrt(){
var x=document.getElementById("in").value;
 var a= Math.sqrt(x);
 document.querySelector("#out").textContent=a;  
}
function per(){
  var x=document.getElementById("in").value;
  var y=new Array();
  y=x.split(" ");
  var a=y[1]*(y[0]*1/100);
 document.querySelector("#out").textContent=a;
}
function fact(){
  var x=document.getElementById("in").value;
   var fact=1;
  for(var i=x; i>=1; i--){
    fact=fact*i;
  }
  document.querySelector("#out").textContent=fact;}
function mod(){
  var x=document.getElementById("in").value;
  if(x>=0){
  var a=x;
  }
  else{
    a=-x;
  }
 document.querySelector("#out").textContent=a;
}
 function round(){
   var x=document.getElementById("in").value;
  var a=Math.round(x);
 document.querySelector("#out").textContent=a;
 }



