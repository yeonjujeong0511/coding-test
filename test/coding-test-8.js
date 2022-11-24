// function newarr() {
//   let arr = new Array();
// }

// const num = Math.round(Math.random());
// //console.log(num);

// const arr = Array.from({ length: 10 }, (num) => Math.round(Math.random()));

// //console.log(arr);

// console.log(arr2.length); //5
// console.log(arr2[0][0]);
// console.log(arr2[0].length); // 10
// let n = 1;

function bingo(n) {
  const arr2 = Array.from(Array(n), () =>
    Array(10).fill(Math.round(Math.random()))
  );

  let count = 0;
  console.log(arr2);
  while (arr2[0].length !== 0) {
    for (let i = 0; i < arr2[0].length; i++) {
      for (let j = 0; j < arr2.length; ) {
        if (arr2[j][i] === 0) {
          j++;
        } else {
          if (j < arr2.length) {
            for (let x = 0; x < arr2.length; x++) {
              arr2[x].splice(i, 1);
              count++;
              console.log("시도횟수", count);
            }
            j++;
          }
        }
      }
      console.log(arr2);
    }
  }
  console.log(`${count}번만에 완료완료 승리!`);
}
bingo(6);
