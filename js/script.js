let docTitle = document.title;

window.addEventListener("blur", function() {
  document.title = "retorne e me conheça!";
});

window.addEventListener("focus", function() {
  document.title = docTitle;
});