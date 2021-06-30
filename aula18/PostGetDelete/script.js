const urlBase = "https://www.omdbapi.com/";
const apiKey = "&apikey=";

//GET
fetch(`${urlBase}?s=hulk${apiKey}`, { method: "GET" })
  .then((resposta) => resposta.json())
  .then((resposta) => {
    console.log(resposta);
    mostraFilmes(resposta);
  });

const mostraFilmes = (resposta) => {
  console.log("Mostra resposta", resposta);
};

//Post

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"title_task": "Adicionado com post FETCH", "level":"8"}',
})
  .then((resposta) => resposta.json())
  .then((resposta) => console.log(resposta));

//put

fetch(`${url}/1`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"title_task":"Adicionado com FETCH (PUT)", "level": "999999"}',
})
  .then((resposta) => resposta.json())
  .then((resposta) => console.log(resposta));
