const notifyNew = {
  body: "Thank you for turning notifications on!"
}

function turnOn() {
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      var notification = new Notification("Notifications On!", notifyNew);
notification.onclick = function() {
  open("https://all-the-gens.github.io/l/word-search/main.html");
}
    }
  });
}
