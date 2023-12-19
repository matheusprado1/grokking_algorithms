// a lista tem que ser ordenada obrigatoriamente
let minhaLista = [1, 3, 5, 7, 9, 10];

const pesquisaBinaria = (lista, item) => {
  // baixo e alto acompanham a parte da lista que está procurando
  let baixo = 0;
  let alto = lista.length - 1;

  // enquanto ainda não conseguiu chegar a um único elemento...
  while (baixo <= alto) {
    // ...verifica o elemento central
    let meio = Math.floor((baixo + alto) / 2); // utilizei Math.floor para arredondar para baixo
    let chute = lista[meio];
    // acha o item
    if (chute === item) {
      return meio;
    }
    // o chute foi muito alto
    if (chute > item) {
      alto = meio - 1;
    }
    // o chute foi muito baixo
    else {
      baixo = meio + 1;
    }
  }
  // o item não existe
  return null;
}

const result = pesquisaBinaria(minhaLista, 7);
console.log(result)
