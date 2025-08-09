// function solve(s, k) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   let letterToDelete = 0;
//   let delCount = 0;
//   const splitted = s.split("");

//   for (let i = 0; i < k; i++) {
//     const index = splitted.findIndex((s) => s === alphabet[letterToDelete]);
//     if (index == -1) {
//       letterToDelete += 1;
//       i--;
//     } else {
//       splitted.splice(index, 1);
//       delCount++;
//     }
//   }
//   return splitted.join("");
// }

function solve(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let letterToDelete = 0;
  let delCount = 0;
  const splitted = s.split("");

  const indexDeleteing = [];

  for (let i = 0; i < alphabet.length; i++) {
    const index = splitted.findIndex((s) => s === alphabet[letterToDelete]);
    if (index == -1) {
      letterToDelete += 1;
      i--;
    } else {
      indexDeleteing.push(i);
      delCount++;
    }
  }

  console.log(indexDeleteing);

  for (let i = 0; i < k; i++) {
    splitted.splice(indexDeleteing[i] - i, 1);
  }
  //   for (let i = 0; i < k; i++) {
  //   const index = splitted.findIndex((s) => s === alphabet[letterToDelete]);
  //   if (index == -1) {
  //     letterToDelete += 1;
  //     i--;
  //   } else {
  //     splitted.splice(index, 1);
  //     delCount++;
  //   }
  //   }
  console.log(splitted.join(""));
  return splitted.join("");
}

solve("abracadabra", 1);
solve("abracadabra", 2);
solve("abracadabra", 6);
solve("abracadabra", 8);
// solve("abracadabra", 50);
