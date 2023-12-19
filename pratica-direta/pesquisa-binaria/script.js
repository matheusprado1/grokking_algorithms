let listaOrdenada = [3, 6, 7, 9, 10, 13];

const pesquisaBinaria = (arr, item) => {
  let baixo = 0;
  let alto = arr.length - 1;

  while (baixo <= alto) {
    let meio = Math.floor((baixo + alto) / 2);
    let chute = arr[meio];

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

const result = pesquisaBinaria(listaOrdenada, 3);
console.log(result);