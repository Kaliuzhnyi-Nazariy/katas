var clonewars = function (kataPerDay) {
  // Your code here!
  let clones = 1;
  let solvedKatas = 0;

  console.log("====================");

  for (let i = 1; i <= kataPerDay; i++) {
    if (kataPerDay !== 1) {
      if (i != 1) {
        clones = clones * 2;
        solvedKatas += clones * (kataPerDay - i + 1);
        console.log(`kataPerDay ${i}: `, kataPerDay - i + 1);
      } else {
        solvedKatas += clones * kataPerDay;
      }
      //   console.log("clones during day: ", clones);
      //   console.log("kataPerDay - i during day: ", kataPerDay - i);
      console.log("day: ", i);
      console.log("clones: ", clones);
      console.log("kataPerDay: ", kataPerDay);

      console.log({ solvedKatas });
    } else {
      {
        solvedKatas += 1;
      }
    }
  }
  console.log([clones, solvedKatas]);

  return [clones, solvedKatas];
};

// clonewars(1);
// clonewars(5);
// clonewars(10);
clonewars(4);

// // Test.assertSimilar(clonewars(1), [1, 1]);
// // Test.assertSimilar(clonewars(5), [16, 57]);
// // Test.assertSimilar(clonewars(10), [512, 2036]);

// var clonewars = function (kataPerDay) {
//   let clones = 1;
//   let solvedKatas = 0;

//   for (let i = 1; i <= kataPerDay; i++) {

//     if (kataPerDay !== 1) {
//       if (i != 1) {
//         clones = clones * 2;
//         solvedKatas += clones * (kataPerDay - i + 1);
//       } else {
//         solvedKatas += clones * kataPerDay;
//       }
//     } else {
//       {
//         solvedKatas += 1;
//       }
//     }
//   }

//   return [clones, solvedKatas];
// };
