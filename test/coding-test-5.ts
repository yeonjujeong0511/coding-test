const inputData_ts = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];
let step_ts:number = 0;

function sortArray_ts(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // 최소값 구하기 위해 먼저, minindex를 i로
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        // arr[0] > arr[0] false면 if문 실행안되고, for문으로 가서 j ++
        // j = 1, arr[0] > arr[1]
        minIndex = j;
        step_ts++;
      }
    }
    if (minIndex !== i) {
      // 처음에 설정한 index 값이 최소값의 위치로 바뀌면, i랑 같지 않기 때문에
      // temp에 arr[i]에 잠깐 저장해놓고
      const temp = arr[i];
      arr[i] = arr[minIndex];
      // arr i번째 자리에, 최소값으로 바꿔주고
      arr[minIndex] = temp;
      // 최소값 자리에 temp에 저장해둔 값으로 바꿔준다.
    }
  }
  return arr;
}