const arrayOrdered = [3, 5, 6, 8, 9, 12]

const pesquisaBinaria = (list, item) => {

  let baixo = 0;
  let alto = list.length - 1;

  while (baixo <= alto) {
    let meio = Math.floor((alto + baixo) / 2);
    let chute = list[meio];

    if (chute === item) {
      return meio;
    }
    if (chute > item) {
      alto = meio - 1;
    }
    else {
      baixo = meio + 1;
    }
  }
  return null;
}

const result = pesquisaBinaria(arrayOrdered, 5);
console.log(result);