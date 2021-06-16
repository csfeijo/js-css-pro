function carregaDados(arquivo) {
  var httpRequest = new XMLHttpRequest();

  // NA VOLTA CHAMA: callback
  httpRequest.onload = mostraDados;

  httpRequest.onloadstart = mostraLoader;

  // Requisita o arquivo / endereço
  httpRequest.open('GET', arquivo, true);

  // send: caso queriamos enviar algum dado (via GET) para o produtos.html
  httpRequest.send(null);
}

function mostraLoader() {
  var lista = document.getElementById('lista');
  lista.innerHTML = 'Carregando...';
  // Podemos tambem adicionar uma imagem no lugar do texto
  // lista.innerHTML = '<img src="img/ajax-loader.gif">';
}

function mostraDados() {
  var lista = document.getElementById('lista');

  // A necessidade do this é devido ao responseText ser inserido pelo httpRequest.onload
  // e se tornar uma propriedade DESTA (this) função
  lista.innerHTML = this.responseText;
}
// Automatizando um botao para fazer o Ajax
var btnProdutos = document.getElementById('btn-produtos');
btnProdutos.addEventListener('click', function () {
  carregaDados('produtos.html');
});

var btnCarros = document.getElementById('btn-carros');
btnCarros.addEventListener('click', function () {
  carregaDados('carros.html');
});



