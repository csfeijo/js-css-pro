var mostraNotification = document.querySelector("#mostra-notificaton");

mostraNotification.addEventListener("click", function (event) {
  event.preventDefault();
  chamaNotification();
});

function chamaNotification() {
  if (!Notification) {
    alert("Verifica Notification");
    return;
  }

  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  abriNotification();
}

function abriNotification() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  } else {
    new Notification("Notification Title", {
      icon: "https://image.flaticon.com/icons/png/128/1827/1827504.png",
      body: "Abner Fonseca",
    });
  }
}
