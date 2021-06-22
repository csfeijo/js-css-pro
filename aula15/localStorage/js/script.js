window.localStorage.setItem("nome", "Abner fonseca");

const data = {
  nome: "Abner Fonseca",
  idade: 26,
  rua: "Av elmira pereira silveira",
};

const valorData = JSON.stringify(data);

window.localStorage.setItem("usuario", valorData);

const retonarObjetoDoStorage = window.localStorage.getItem("usuario");

console.log("mostra valor retonado", retonarObjetoDoStorage);
console.log("mostra valor retonado (JSON)", JSON.parse(retonarObjetoDoStorage));

// window.localStorage.removeItem("nome");
// window.localStorage.removeItem("usuario");

window.localStorage.clear();
