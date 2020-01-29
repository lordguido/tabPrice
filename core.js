let varPC = document.getElementById("varPC");
let checkPlus = document.getElementById("checkPlus");
let varPV = document.getElementById("varPV");

checkPlus.onclick =  function(){
  varCondPlus = document.getElementById("checkPlus").checked ;
  calcular(varCondPlus);
}

varPC.onblur = function(){
  calcular(document.getElementById("checkPlus").checked);
}

varPC.onfocus = function(){
  varPC.value = ""
}

function calcular(varCondPlus) {
  var valor1 = document.calcform.varPC.value;
  valor1 = valor1.replace("R$ ", "");
  valor1 = parseInt(valor1); 
  var varMargem = 20;
  var varPlus = 10;
  var res = valor1 * 2.25 ;
  if ( varCondPlus === true ) {
    res = valor1 * 2.35;
  }
  res = res.toFixed(2);
  res = res.replace('.', ',')
  document.calcform.varPV.value = res;
}