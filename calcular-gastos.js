document.addEventListener("DOMContentLoaded", function(event) {
  var formjs =  document.getElementById('DraulioVarela');
  function calculaGasto (e){
    e.preventDefault();
    var potenciajs = document.querySelector("#potencia");
    var mes = 30;
    var centavos = 0.3;
    var horasjs = document.querySelector("#horas");
    var potenciaph = potenciajs.value / 1000;
    var resultado = (potenciaph * mes * horasjs.value) * centavos;
    var drauliojs = document.getElementById('draulio');
    drauliojs.textContent = "R$" + resultado.toFixed(2) ;

    console.log(resultado)
  };
  formjs.addEventListener("submit",  calculaGasto, false);

});
