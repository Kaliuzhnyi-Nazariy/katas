// function generatePairs(n) {
//   let res = [];
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       if (!res.find((pair) => JSON.stringify(pair) == JSON.stringify([j, i]))) {
//         res.push([i, j]);
//       }
//     }
//   }
//   return res;
// }

function generatePairs(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      res.push([i, j]);
    }
  }
  console.log(res);
  return res;
}

generatePairs(5);
