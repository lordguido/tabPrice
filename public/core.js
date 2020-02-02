var socket = io('http://servidorcp.ddns.net:8085/');

var varPC = document.getElementById("varPC");
var varPV = document.getElementById("varPV");
var varDesc = document.getElementById("varDesc");
varPC.onblur = function(){
  calcular();
}

varDesc.onkeypress = function(event){
  if ( event.key === "Enter") {
    varPC.focus();
  }
}

varPC.onkeypress = function(event){
  if ( event.key === "Enter") {
    calcular();
  }
}

varPC.onfocus = function(){
  varPC.value = ""
}

varDesc.onfocus = function(){
  varPC.value = ""
  varDesc.value = ""
}

function calcular() {
  var varPcDesc =  (varPC.value - (varPC.value * varDesc.value / 100));
  var res = varPcDesc * 2.25 ;
  res = res.toFixed(0);
  res2 = varPcDesc.toFixed(0);
  varPV.value = res;
  varPC.value = res2;
  socket.emit('sendPV', {res, res2});

  varFat = 600437.19;
  varPcVend = 5450;
  varGastoForne = 296139.79;
  varPccomp = 5932;
  varCustoFx = 161525.79;
  varCustoTaxa = 0.20;
  varLucro = 0.30;
  varCustoLoja = varCustoFx / varPcVend;
  varNewPV1 = varPcDesc + varCustoLoja;
  varValorMedioPcComprada = varGastoForne / varPccomp;
  varValorMinPcComprada = varValorMedioPcComprada / 2;
  varValorMaxPcComprada = varValorMedioPcComprada * 2.5;
  varMargemMedia = 0.25;
  varMargemMin = 0.55;
  varMargemMax = 0.50;
  varIncreMin = (varMargemMin - varMargemMedia) / ( varValorMedioPcComprada - varValorMinPcComprada );
  varIncreMax = (varMargemMax - varMargemMedia) / ( varValorMaxPcComprada - varValorMinPcComprada ); 
  console.log(varPcDesc);
  console.log(varValorMedioPcComprada);
  if ( varPcDesc >= varValorMedioPcComprada ) {
    console.log('Maior q Media');
    varPcMaisCustoLoja = varPcDesc + varCustoLoja;
  } else {
    varIncrCusto =  varCustoLoja / (varValorMedioPcComprada - varValorMinPcComprada);
    varCustoProp = (varValorMedioPcComprada - varValorMinPcComprada) * varIncrCusto;
    varPcMaisCustoLoja = varPcDesc + varCustoProp;
    console.log('Menor q Media')
  }
  console.log(varPcMaisCustoLoja)
}
