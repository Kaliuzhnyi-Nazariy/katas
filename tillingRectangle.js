// function numTiles(width, height) {
//   console.log("--------------------------------");
//   //   const res = 0;
//   const res = (height % width) + 1;
//   //   console.log(width);
//   //   console.log(Number(width));
//   //   console.log(height);
//   console.log("==============================");
//   console.log({ res });
//   return 0n;
// }

// numTiles(1, 1);
// numTiles(2, 1);
// numTiles(2, 2);
// numTiles(3, 2);
// numTiles(8, 4);
// numTiles(4, 8);
// // numTiles(13n, 11n);
// // numTiles(15n, 5n);
// // numTiles(16n, 16n);

// function numTilesDev(width, height, result) {
//   console.log("");
//   console.log("--------------------------------");
//   let limit = false;
//   let needCoverSquare = width * height;
//   let res = 0;
//   // const lowerVal = width > height ? height : width;
//   const lowerVal = width == height ? width : width > height ? height : width;
//   let maxTileSize =
//     lowerVal % 2 === 0 || lowerVal === 1 ? lowerVal : lowerVal - 1;

//   console.log(lowerVal);

//   console.log({ width, height, result });
//   console.log({ maxTileSize });

//   const higherVal = width == height ? width : width > height ? width : height;

//   // do {
//   //   if (needCoverSquare >= maxTileSize ** 2) {
//   //     needCoverSquare -= maxTileSize ** 2;
//   //     if (height - maxTileSize * res < height) {
//   //       limit = true;
//   //       console.log({ limit });
//   //     }
//   //     res++;
//   //   } else if (needCoverSquare < maxTileSize ** 2) {
//   //     if (maxTileSize - 2 == 0) {
//   //       maxTileSize = 1;
//   //     } else {
//   //       maxTileSize -= 2;
//   //     }
//   //   }
//   // } while (needCoverSquare > 0);
//   do {
//     console.log("");
//     console.log({ needCoverSquare });
//     console.log("check for limit", maxTileSize * (res + 1));

//     if (maxTileSize * (res + 1) > width) {
//       limit = true;
//       if (maxTileSize - 2 <= 0) {
//         maxTileSize = 1;
//       } else {
//         maxTileSize -= 2;
//       }
//     } else {
//       limit = false;
//     }

//     if (!limit && needCoverSquare >= maxTileSize ** 2) {
//       needCoverSquare -= maxTileSize ** 2;
//       res++;
//     }
//     // else if (limit || needCoverSquare < maxTileSize ** 2) {
//     //   if (maxTileSize - 2 <= 0) {
//     //     maxTileSize = 1;
//     //   } else {
//     //     maxTileSize -= 2;
//     //   }
//     // }
//   } while (needCoverSquare > 0);

//   //   console.log("--------------------------------");
//   //   const res = 0;
//   //   const res = (Number(width) % Number(width)) + 1;
//   //   console.log({ width });
//   //   //   console.log(Number(width));
//   //   console.log({ height });
//   console.log("==============================");
//   console.log("result I should have: ", result);
//   console.log({ res });
//   console.log("Is correct: ", result === res);
//   return 0n;
// }

function numTilesDev(width, height, result) {
  console.log("");
  console.log("--------------------------------");
  let limit = false;
  let needCoverSquare = width * height;
  let res = 0;
  // const lowerVal = width > height ? height : width;
  const lowerVal = width == height ? width : width > height ? height : width;
  let maxTileSize =
    lowerVal % 2 === 0 || lowerVal === 1 ? lowerVal : lowerVal - 1;

  console.log(lowerVal);

  console.log({ width, height, result });
  console.log({ maxTileSize });

  const higherVal = width == height ? width : width > height ? width : height;
  let widthLeft = width;

  // do {
  //   if (needCoverSquare >= maxTileSize ** 2) {
  //     needCoverSquare -= maxTileSize ** 2;
  //     if (height - maxTileSize * res < height) {
  //       limit = true;
  //       console.log({ limit });
  //     }
  //     res++;
  //   } else if (needCoverSquare < maxTileSize ** 2) {
  //     if (maxTileSize - 2 == 0) {
  //       maxTileSize = 1;
  //     } else {
  //       maxTileSize -= 2;
  //     }
  //   }
  // } while (needCoverSquare > 0);
  while (needCoverSquare > 0) {
    widthTaken = 0;
    if (widthTaken + 1 > width) {
      limit = true;
      if (maxTileSize - 2 <= 0) {
        maxTileSize = 1;
      } else {
        maxTileSize -= 2;
      }
    } else {
      limit = false;
    }

    if (!limit && needCoverSquare >= maxTileSize ** 2) {
      needCoverSquare -= maxTileSize ** 2;
      console.log({ maxTileSize, res, needCoverSquare, limit });
      widthTaken = maxTileSize * res;
      res++;
    } else if (limit && maxTileSize <= 1) {
      break; // can't go smaller, no more moves
    }
  }
  console.log("==============================");
  console.log("result I should have: ", result);
  console.log({ res });
  console.log("Is correct: ", result === res);
  return 0n;
}

// numTilesDev(1, 1, 1);
// numTilesDev(2, 1, 2);
// numTilesDev(2, 2, 1);
// numTilesDev(3, 2, 3);
// numTilesDev(8, 4, 2);
// numTilesDev(4, 8, 2);
// numTilesDev(13, 11, 32);
numTilesDev(15, 5, 24);
// numTilesDev(16, 16, 1);

// assert.strictEqual(numTiles(1n, 1n), 1n, `numTiles( 1, 1 )`);
// assert.strictEqual(numTiles(2n, 1n), 2n, `numTiles( 2, 1 )`);
// assert.strictEqual(numTiles(2n, 2n), 1n, `numTiles( 2, 2 )`);
// assert.strictEqual(numTiles(3n, 2n), 3n, `numTiles( 3, 2 )`);
// assert.strictEqual(numTiles(8n, 4n), 2n, `numTiles( 8, 4 )`);
// assert.strictEqual(numTiles(4n, 8n), 2n, `numTiles( 4, 8 )`);
// assert.strictEqual(numTiles(13n, 11n), 32n, `numTiles( 13, 11 )`);
// assert.strictEqual(numTiles(15n, 5n), 24n, `numTiles( 15, 5 )`);
// assert.strictEqual(numTiles(16n, 16n), 1n, `numTiles( 16, 16 )`);
