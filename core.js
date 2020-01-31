var varPC = document.getElementById("varPC");
var varPV = document.getElementById("varPV");
var varDesc = document.getElementById("varDesc");
varPC.onblur = function(){
  calcular();
}

varPC.onfocus = function(){
  varPC.value = ""
}

function calcular() {
  
  var varPcDesc =  (varPC.value - (varPC.value * varDesc.value / 100));
  var res = varPcDesc * 2.25 ;
  res = res.toFixed(2);
  varPV.value = res;
  document.getElementById("spPC").innerHTML = varPcDesc;
}