// function read(tape, head, moves) {
//   const res = [];

//   const splittedTape = tape.split("");
//   const move = moves.split("");
//   for (let i = 0; i < move.length; i++) {
//     if (move[i] == ">") {
//       res.push(splittedTape[head++]);
//     } else if (move[i] == "<") {
//       res.push(splittedTape[head--]);
//     }
//   }
//   return res.join("");
// }

function read(tape, head, moves) {
  return moves
    .split("")
    .map((move) =>
      move == ">" ? tape.split("")[head++] : tape.split("")[head--]
    )
    .join("");
}

read("011010", 2, ">>><"); //1010
read("011010", 2, ""); // ''
read("011010", 0, ">>>>>"); //01101
read("011010", 5, "<<<<<"); //01011
