if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/serviceworker.js", { scope: "./" })
    .then(function () {
      console.log("[Companion]", "Service worker registered!");
    });
}
