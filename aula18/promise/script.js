function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAqui(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Não é uma String");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAqui("Conectar no banco", rand(1, 5))
  .then((resposta) => {
    console.log(resposta);
    return esperaAqui("Buscar dados no banco", rand(1, 5));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAqui("Tratar Dados", rand(1, 5));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(`ERRO ${erro}`);
  });

console.log("Vai mostrar antes da Promise");
