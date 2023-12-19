const buscaBinariaRecursiva = (arr, alvo, inicio = 0, fim = arr.length - 1) => {
  // Caso base: se o início for maior que o fim, o elemento não está na lista
  if (inicio > fim) {
    return null;
  }

  // Encontrar o meio do array
  const meio = Math.floor((inicio + fim) / 2);

  // Verificar se o elemento do meio é igual ao alvo
  if (arr[meio] === alvo) {
    return meio; // Elemento encontrado, retorna o índice
  } else if (arr[meio] < alvo) {
    // Se o elemento do meio for menor que o alvo, buscar na metade direita
    return buscaBinariaRecursiva(arr, alvo, meio + 1, fim);
  } else {
    // Se o elemento do meio for maior que o alvo, buscar na metade esquerda
    return buscaBinariaRecursiva(arr, alvo, inicio, meio - 1);
  }
}

// Exemplo de uso:
const listaOrdenada = [1, 2, 4, 5, 6, 8, 9, 10];
const elementoAlvo = 9;

const resultado = buscaBinariaRecursiva(listaOrdenada, elementoAlvo);

if (resultado !== null) {
  console.log(`O elemento ${elementoAlvo} foi encontrado no índice ${resultado}.`);
} else {
  console.log(`O elemento ${elementoAlvo} não foi encontrado na lista.`);
}
