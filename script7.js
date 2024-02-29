let message = prompt("Écris ta phrase ici");

let response = function(str) {
  if (str.slice(-1) == "?") {
    return "Ouais Ouais...";
  }
  else if (str != "" && str == str.toUpperCase()) {
    return "Pwa, calme-toi...";
  }
  else if (str.includes("fortnite")) {
    return "on s'fait une partie soum-soum ?";
  }
  else if (str == null || str == "") {
    return "t'es en PLS ?";
  }
  else {
    return "balek.";
  }
};
console.log(response(message));