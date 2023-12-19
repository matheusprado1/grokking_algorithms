const buscaMenorIndice = arr => {
  let menorElemento = arr[0];
  let menorIndice = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < menorElemento) {
      menorElemento = arr[i];
      menorIndice = i;
    }
  }
  return menorIndice;
}

const ordenacaoPorSelecao = arr => {
  let sortedArr = [];
  let lengthArr = arr.length;

  for (let i = 0; i < lengthArr; i++) {
    let menorIndice = buscaMenorIndice(arr);
    sortedArr.push(arr.splice(menorIndice, 1)[0]);
  }
  return sortedArr;
}

const result = ordenacaoPorSelecao([3, 4, 9, 6, 2, 1, 10]);
console.log(result);