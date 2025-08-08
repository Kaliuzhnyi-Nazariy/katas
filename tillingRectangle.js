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

function numTilesDev(width, height, result) {
  console.log("--------------------------------");
  let res = 0;
  // const res = (height % width) + 1;
  const needToCover = width * height;
  let maxTileSize =
    width == height
      ? width
      : width > height
      ? height % 2 == 0
        ? height
        : height - 1
      : width % 2 == 0
      ? width
      : width - 1;

  console.log(needToCover);
  console.log(maxTileSize);

  // let widthToCalculate = width;
  // let heightToCalculate = height;

  // if (
  //   widthToCalculate - maxTileSize >= 0 &&
  //   heightToCalculate - maxTileSize >= 0
  // ) {
  //   widthToCalculate -= maxTileSize;
  //   console.log({ widthToCalculate });
  //   // maxTileSize -=
  // }

  const sizes = [];

  for (let i = 1; i < width; i++) {
    if (width - maxTileSize * i < 0) {
      if (height - maxTileSize >= 0) {
        console.log("width left: ", width - maxTileSize * i);
        console.log("i: ", i - 1);
        sizes.push(i - 1);
        break;
      }
    } else if (width - maxTileSize * i == 0) {
      sizes.push(i);
      break;
    }
  }
  console.log({ sizes });

  // const tileSize =

  // for (let i = 0; i < height; i++) {
  //   let row = "";
  //   for (let j = 0; j < width; j++) {
  //     // console.log(res);

  //     if (i < heightToCalculate && j < widthToCalculate) {
  //       row += "#";
  //       res++;
  //     } else {
  //       row += ".";
  //     }
  //   }
  //   console.log(row);
  // }
  // let addedTiles = 0;

  // for (let y = 0; y < height; y++) {
  //   let row = "";
  //   for (let x = 0; x < width; x++) {
  //     if (x < maxTileSize && y < maxTileSize) {
  //       row += "*";
  //     } else {
  //       row += ".";
  //     }
  //   }
  //   // console.log("width:", width - maxTileSize);
  //   // console.log("height: ", height - maxTileSize);
  //   if (
  //     width - maxTileSize >= 0 &&
  //     width - maxTileSize >= widthToCalculate &&
  //     height - maxTileSize >= 0
  //   ) {
  //     const check = row.split("").findIndex((p) => p == ".");
  //     // console.log({ check });
  //     if (check >= 0) {
  //       // console.log(row.slice(check, check + maxTileSize));
  //       // row.split("").splice(check, maxTileSize, "#");
  //       // console.log(row.split("").splice(0, maxTileSize, "#").join(""));
  //       const chars = row.split("");
  //       chars.splice(check, maxTileSize, ..."#".repeat(maxTileSize));
  //       row = chars.join("");
  //     }
  //   }
  //   console.log(row);
  //   // console.log(`Added tile at: (${x}, ${y})`);
  // }
  // console.log({ addedTiles });

  // for (let i = 0; i < height; i++) {
  //   let row = "";
  //   for (let j = 0; j < width; j++) {
  //     row += "#";
  //   }
  //   console.log(row);
  // }
  //   console.log(Number(width));
  console.log("==============================");
  console.log({ res });
  console.log("what I should receive: ", result);
  console.log("is correct: ", result == res);
  return 0n;
}

// numTilesDev(1, 1, 1);
// numTilesDev(2, 1, 2);
// numTilesDev(2, 2, 1);
// numTilesDev(3, 2, 3);
numTilesDev(8, 4, 2);
numTilesDev(4, 8, 2);
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
