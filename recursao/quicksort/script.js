const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const indicePivo = Math.floor(array.length / 2);
  const pivo = array.splice(indicePivo, 1)[0];

  const itensMenoresPivo = array.filter(key => key <= pivo);
  const itensMaioresPivo = array.filter(key => key > pivo);

  return [...quickSort(itensMenoresPivo), pivo, ...quickSort(itensMaioresPivo)];
};

// Exemplo de uso:
const arrayDesordenado = [10, 5, 2, 3, 7, 8, 1];
const arrayOrdenado = quickSort(arrayDesordenado);


console.log(arrayOrdenado);
