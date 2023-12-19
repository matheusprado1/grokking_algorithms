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
  // obrigatoriamente é preciso separar o comprimento do array original em uma variavel
  // pois se passar direto no for, o comprimento do array esta sendo modificado a cada
  // iteração com splice, com a variável setada eu garanto que o comprimento do array 
  // vai ser respeitado
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    // encontra o menor elemento do array
    let menorIndice = buscaMenorIndice(arr);
    // adiciona o menor elemento ao novo array
    sortedArr.push(arr.splice(menorIndice, 1)[0]);
  }
  return sortedArr;
}

const result = ordenacaoPorSelecao([9, 4, 10, 34, 67, 1, 8]);
console.log(result);