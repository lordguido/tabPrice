var socket = io('http://192.168.0.19:8085/');

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
  res = res.toFixed(0);
  varPV.value = res;
  document.getElementById("spPC").innerHTML = varPcDesc;

  socket.emit('sendPV', res);

  varPcVend = 5450;
  varPccomp = 5932;
  varGastoForne = 296139.79;

  varCustoFx = 161525.79;
  varCustoTaxa = 0.20;

  varLucro = 0.30;


  varFat = 600437.19;

  varCustoLoja = varCustoFx / varPcVend;
  console.log(varCustoLoja)

  varNewPV1 = varPcDesc + varCustoLoja;
  console.log(varCustoLoja)

  varValorMedioPcComprada = varGastoForne / varPccomp;
  varValorMinPcComprada = varValorMedioPcComprada / 2;
  varValorMaxPcComprada = varValorMedioPcComprada * 2.5;
  console.log(varValorMinPcComprada)
  console.log(varValorMedioPcComprada)
  console.log(varValorMaxPcComprada)

  varMargemMedia = 0.25;
  varMargemMin = 0.55;
  varMargemMax = 0.50;

  varIncreMin = (varMargemMin - varMargemMedia) / ( varValorMedioPcComprada - varValorMinPcComprada );
  varIncreMax = (varMargemMax - varMargemMedia) / ( varValorMaxPcComprada - varValorMinPcComprada );
  console.log(varIncreMin)
  console.log(varIncreMax)
}

socket.on('receivedPV', function(varPV) {

  document.getElementById("fieldPV").innerHTML = varPV;

});