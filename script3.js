let f = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étage veux-tu ?")
let pyramid = function(f) {
  for (let i = 1; i <= f; i++) {
    let string = "";

    //To add spaces to the left
    for (let j = 1; j <= f - i; j++) {
      string += " ";
    }

    //To add #
    for (let k = 1; k <= i; k++) {
      string += "#";
    }

    //To print the pattern
    console.log(string);
  }
};
console.log(pyramid(f));