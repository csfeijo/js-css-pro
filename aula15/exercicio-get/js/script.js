var mostraTodosOsDados = document.querySelector("#lista-dados");
var botaoEnviarDados = document.querySelector("#enviar");

var chamada = new XMLHttpRequest();
const url = "https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos";

mostraTodosOsDados.addEventListener("click", function (event) {
  event.preventDefault();
  pegaValor();
});

botaoEnviarDados.addEventListener("click", function (event) {
  event.preventDefault();
  enviarDados();
});

pegaValor();

function enviarDados() {
  chamada.open("POST", url, true);
  chamada.setRequestHeader("Content-type", "application/json;charset=UTF-8");

  var nome = document.querySelector("#nome").value;
  var preco = document.querySelector("#preco").value;

  chamada.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {
      pegaValor();
    }
  };

  chamada.send(
    JSON.stringify({
      nome: nome,
      preco: preco,
    })
  );
}

function pegaValor() {
  chamada.open("GET", url, true);
  chamada.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      var arrayDeProdutos = JSON.parse(this.responseText);
      mostraArray(arrayDeProdutos);
    }
  };
  chamada.send(null);
}

function mostraArray(array) {
  var saida = "";
  var i;
  for (i = 0; i < array.length; i++) {
    saida +=
      '<div class="container-card"><h1 class="titulo-card">' +
      array[i].nome +
      '</h1><div class="image"><img src="' +
      array[i].imagem +
      '" alt="' +
      array[i].nome +
      '" /></div><p class="preco">' +
      array[i].preco +
      '</p><p class="descricao">' +
      array[i].descricao +
      '</p><p class="loja">' +
      array[i].loja +
      "</p></div>";
  }
  document.getElementById("lista-de-produtos").innerHTML = saida;
}
