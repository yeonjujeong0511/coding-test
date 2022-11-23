function newarr() {
  let arr = new Array();
}

const num = Math.round(Math.random());
//console.log(num);

const arr = Array.from({ length: 10 }, (num) => Math.round(Math.random()));

//console.log(arr);

const arr2 = Array.from(Array(5), () =>
  Array(10).fill(Math.round(Math.random()))
);

console.log(arr2.length); //5
console.log(arr2[0][0]);
console.log(arr2[0].length); // 10
let n = 1;
let count = arr2[0].length;
while ((count = 0)) {
  for (let i = 0; i < arr2[0].length; i++) {
    let j = 0;
    while (j < arr2.length) {
      if (arr[j][i] === 0) {
        break;
      } else {
        if ((j = arr2.length)) {
          for (let x = 0; x < arr2.length; x++) {
            arr2[x][i].splice(i, 1);
            i--;
          }
        } else {
          j++;
        }
      }
    }
  }
  console.log(arr2);
}

//     for (let j = 0; j < arr2.length; j++) {
//       // j = 0 arr2[0][0]
//       // j = 1 arr2[1][0]
//       // j = 2 arr2[2][0]
//       // j = 3 arr2[3][0]
//       // j = 4 arr2[4][0]
//       if (arr2[j][i] === 0) {
//         i++;
//       } else {
//         arr2[j].splice(i, 1);
//         i--;
//       }
//       console.log(arr2);
//     }
//   }
// }
// console.log(arr2);
// function prac1(array) {
//   let r = array.length;
//   let c = array[0].length;
//   let newarr = Array.from(new Array(c), () => new Array(r).fill(""));

//   for (let i = 0; i < r; i++) {
//     for (let j = 0; j < c; j++) {
//       newarr[j][i] = array[i][j];
//     }
//   }
// }

// console.log(prac1(arr2));

// while (true) {
//   for (let i = 0; i < arr2[1].length; i++) {
//     if (
//       arr2[0][i] === 1 &&
//       arr2[1][i] === 1 &&
//       arr2[2][i] === 1 &&
//       arr2[3][i] === 1 &&
//       arr2[4][i] === 1
//     ) {
//       arr2[0].splice(i, 1);
//       arr2[1].splice(i, 1);
//       arr2[2].splice(i, 1);
//       arr2[3].splice(i, 1);
//       arr2[4].splice(i, 1);
//       i = i - 1;
//     }
//   }
//   arr2[0].length === 0;
//   break;
// }
// for (let i = 5; i < arr2.length; i++) {
//   arr[0];
//   for (let j = 0; j < arr2[i].length; j++) {
//     arr2[i][j] === 1;
//   }
// }

// arr[4][i] === 1 &&
//   arr[3][i] === 1 &&
//   arr[2][i] === 1 &&
//   arr[1][i] === 1 &&
//   arr[0][i] === 1;

// arr[4].splice(i, 0);
// arr[3].splice(i, 0);
