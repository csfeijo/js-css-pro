function carregaDados() {
  var httpRequest = new XMLHttpRequest();

  // NA VOLTA CHAMA: callback
  httpRequest.onload = mostraDados;
  // Requisita o arquivo / endereço
  httpRequest.open('GET', 'produtos.html', true);

  // send: caso queriamos enviar algum dado (via GET) para o produtos.html
  httpRequest.send(null);
}

function mostraDados() {
  var lista = document.getElementById('lista');

  // A necessidade do this é devido ao responseText ser inserido pelo httpRequest.onload
  // e se tornar uma propriedade DESTA (this) função
  lista.innerHTML = this.responseText;
}

// Automatizando um botao para fazer o Ajax
var btnProdutos = document.getElementById('btn-produtos');
btnProdutos.addEventListener('click', carregaDados);






