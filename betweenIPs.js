// function ipsBetween(start, end) {
//   //TODO
//   let res = 0;
//   const splittedIp = start.split(".");
//   const splittedSecondIp = end.split(".");

//   console.log("==============================");
//   console.log(splittedIp);
//   console.log(splittedSecondIp);

//   for (let i = 0; i < splittedIp.length; i++) {
//     if (splittedIp[i] > splittedSecondIp[i]) {
//       console.log("start higher: ", splittedSecondIp[i] - splittedIp[i] + 255);
//       res += splittedSecondIp[i] - splittedIp[i] + 255;
//     } else if (splittedIp[i] < splittedSecondIp[i]) {
//       console.log("end higher: ", splittedSecondIp[i] - splittedIp[i]);
//       res += splittedSecondIp[i] - splittedIp[i];
//     } else {
//       console.log("equality");
//     }
//   }

//   console.log("res: ", res);
//   return res;
// }

// ipsBetween("150.0.0.0", "150.0.0.1");
// ipsBetween("10.0.0.0", "10.0.0.50");
// ipsBetween("20.0.0.10", "20.0.1.0");
// ipsBetween("10.11.12.13", "10.11.13.0");
// ipsBetween("160.0.0.0", "160.0.1.0");
// ipsBetween("170.0.0.0", "170.1.0.0");
// ipsBetween("50.0.0.0", "50.1.1.1");
// ipsBetween("180.0.0.0", "181.0.0.0");
// ipsBetween("1.2.3.4", "5.6.7.8");
// ipsBetween("0.0.0.0", "255.255.255.255");

// =====================================

// ipsBetween("150.0.0.0", "150.0.0.1", 1);
// ipsBetween("10.0.0.0", "10.0.0.50", 50);
// ipsBetween("20.0.0.10", "20.0.1.0", 246);
// ipsBetween("10.11.12.13", "10.11.13.0", 243);

// ipsBetween("160.0.0.0", "160.0.1.0", 256);

// ipsBetween("170.0.0.0", "170.1.0.0", 65536);
// ipsBetween("50.0.0.0", "50.1.1.1", 65793);
// ipsBetween("180.0.0.0", "181.0.0.0", 16777216);
// ipsBetween("1.2.3.4", "5.6.7.8", 67372036);
// ipsBetween("0.0.0.0", "255.255.255.255", 2 ** 32 - 1);

// =======================================

function ipsBetweenToCheck(start, end, result) {
  //TODO
  let res = 0;
  const splittedIp = start.split(".");
  const splittedSecondIp = end.split(".");

  console.log("------------------------------------");

  for (let i = 0; i < splittedIp.length; i++) {
    if (
      splittedSecondIp[i] > splittedIp[i] ||
      splittedSecondIp[i] < splittedIp[i]
    ) {
      if (i == 3) {
        res += Math.abs(splittedSecondIp[i] - splittedIp[i]);
      } else if (Math.abs(splittedSecondIp[i] - splittedIp[i]) >= 1) {
        console.log("else if");
      }
    }

    console.log(Math.abs(splittedSecondIp[i] - splittedIp[i]));
  }

  console.log("==================");

  console.log("res: ", res);

  console.log("result I should receive: ", result);
  return res;
}

ipsBetweenToCheck("150.0.0.0", "150.0.0.1", 1);
ipsBetweenToCheck("10.0.0.0", "10.0.0.50", 50);
ipsBetweenToCheck("20.0.0.10", "20.0.1.0", 246);
ipsBetweenToCheck("10.11.12.13", "10.11.13.0", 243);

ipsBetweenToCheck("160.0.0.0", "160.0.1.0", 256);

ipsBetweenToCheck("170.0.0.0", "170.1.0.0", 65536);
// ipsBetweenToCheck("50.0.0.0", "50.1.1.1", 65793);
// ipsBetweenToCheck("180.0.0.0", "181.0.0.0", 16777216);
// ipsBetweenToCheck("1.2.3.4", "5.6.7.8", 67372036);
// ipsBetweenToCheck("0.0.0.0", "255.255.255.255", 2 ** 32 - 1);

// If [i] > [i + 1] && [i] !>= 4 then second[i] - 1 and splitted[i + 1] 255 - splitted[i + 1]
