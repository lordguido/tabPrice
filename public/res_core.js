var socket = io('http://192.168.0.11:8085/');

var listProd = [];
var listProd2 = [];
socket.on('receivedPV', function(varPV) {
  console.clear();
  if ( listProd.length >= '4' ) {
    listProd2 = [];
    listProd2.push(listProd[1])
    listProd2.push(listProd[2])
    listProd2.push(listProd[3])
    listProd2.push(listProd[4])
    listProd2.push(`<li>Custo R$ ${varPV.res2} - Venda R$ ${varPV.res} </li>`);
    listProd = listProd2
  } else {
    listProd.push(`<li>Custo R$ ${varPV.res2} - Venda R$ ${varPV.res} </li>`);
  }
  var listProd2 = listProd.toString();
  var listProd2 = listProd2.replace(/,/g, '');
  document.getElementById("fieldPV").innerHTML = listProd2;
;
});