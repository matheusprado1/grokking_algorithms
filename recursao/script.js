// const regressiva = i => {
//   console.log(i);
//   if (i <= 1) {
//     return
//   } else {
//     regressiva(i - 1)
//   }
// }
// console.log(regressiva(10))

// const sauda = nome => {
//   console.log(`Olá, ${nome} !`);
//   sauda2(nome)
//   console.log("preparando pra dizer tchau...");
//   tchau();
// }

// const sauda2 = nome => {
//   console.log(`Como vai ${nome} ?`)
// }

// const tchau = () => {
//   console.log("ok, tchau!")
// }


// const result = sauda("maggie");
// console.log(result);

// const fat = x => {
//   if (x === 1) {
//     return 1
//   }
//   else {
//     return x * fat(x - 1)
//   }
// }
// const result = fat(3);
// console.log(result);

// const sum = arr => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// console.log(sum([1, 2, 3]));



// const sumRecursive = arr => {
//   if (arr.length == 0) {
//     return 0;
//   }
//   return arr[0] + sum(arr.slice(1));
// }
// console.log(sumRecursive([1, 2, 3]));

// const countItems = arr => {
//   if (arr.length === 0) {
//     return 0;
//   }

//   return 1 + countItems(arr.slice(1));

// }
// console.log(countItems(["1", "2", "3", "asasa", "jdsioh", "12345"]))

// const highValue = arr => {

//   if (arr.length === 2) {
//     if (arr[0] > arr[1]) {
//       return arr[0]
//     } else {
//       return arr[1]
//     }
//   }

//   let subMax = highValue(arr.slice(1));

//   if (arr[0] > subMax) {
//     return arr[0];
//   } else {
//     return subMax;
//   }


// }
// console.log(highValue([1, 2, 7, 5]))


// const invert = array => {
//   return array.length === 0 ? [] : [array[0] * (-1), ...invert(array.slice(1))]
// }

// console.log(invert([1, 2, 7, 5]));

