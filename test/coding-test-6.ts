const my_expend_item_ts = {
  출퇴근비용: {
    카카오톡자전거: "1500원",
    택시: "3500원",
  },
  커피: {
    엔시나: "4500원",
    카누: "200원",
  },
  고양이간식: {
    닭고기: "400원",
    락토프리우유: "800원",
  },
};

const my_expend_list_ts = {
  출퇴근비용: {
    카카오톡자전거: "19회",
    택시: "3회",
  },
  커피: {
    엔시나: "6잔",
    카누: "15잔",
  },
  고양이간식: {
    닭고기: "30개",
    락토프리우유: "2개",
  },
};

interface value {
  name: string;
  money: number;
  game: string;
  game_price: number;
  expend_item: object;
  expend_list: object;
}
const argument = {
  name: "공미남",
  money: 100000,
  game: "포켓몬 게임",
  game_price: 64800,
  expend_item: my_expend_item_ts,
  expend_list: my_expend_list_ts,
};

function commingsoon_ts(value: value) {
  const expend_item: any = value.expend_item;
  const expend_list: any = value.expend_list;
  let arr1: any = [];
  Object.keys(expend_item).forEach((key) => {
    const a = expend_item[key];
    Object.keys(a).forEach((key) => {
      const b = a[key];
      arr1.push(b);
    });
  });

  let arr2: any = [];
  Object.keys(expend_list).forEach((key) => {
    const a = expend_list[key];
    Object.keys(a).forEach((key) => {
      const b = a[key];
      arr2.push(b);
    });
  });

  let item_price_arr_ts = [];
  for (let i = 0; i < arr1.length; i++) {
    let a = parseInt(arr1[i]);
    item_price_arr_ts.push(a);
  }
  console.log(item_price_arr_ts);

  let list_price_arr: any = [];
  for (let i = 0; i < arr2.length; i++) {
    let a = parseInt(arr2[i]);
    list_price_arr.push(a);
  }
  console.log(list_price_arr);

  // 총 고정지출의 합계를 구하기 위해서,
  // 위에 각 고정지출 항목과 고정지출 내역을 순서대로 값만 배열에 받아온것을 곱해준다.
  const total_expend_arr = [];
  for (let i = 0; i < arr1.length; i++) {
    total_expend_arr.push(item_price_arr_ts[i] * list_price_arr[i]);
  }
  // 현재 지출 합계를 구해주기 위해서 위에 곱한 값을 배열에 담은 것들을
  // 배열의 요소들은 모두 더해, 현재 지출 합계를 구했다.
  // 현재 지출 합계
  const total_expend = total_expend_arr.reduce((a, b) => a + b);

  // 고정 지출 예산 - 현재 지출 합계
  // 남은 예산
  const remain_money = value.money - total_expend;

  //목표 게임의 가격 - 남은 예산
  // 부족한 금액(필요한 금액)
  const need_money = value.game_price - remain_money;

  // 랜덤구하는 함수
  function random() {
    return Math.floor(Math.random() * 10);
  }
  let num1 = random();
  let num2 = random();
  let bycicle = item_price_arr_ts[0];
  let taxi = item_price_arr_ts[1];
  let coffee1 = item_price_arr_ts[2];
  let coffee2 = item_price_arr_ts[3];
  let result =
    bycicle * num1 + taxi * num1 * 2 + coffee1 * num1 * 5 + coffee2 * num2;

  while (result > need_money && result < need_money + 2000) {
    console.log(
      `자전거 ${num1}번, 택시 ${num1 * 2}번 , 엔시나 ${
        num2 * 5
      }번 , 카누 ${num2}번 줄인다.`
    );
    break;
  }
}
commingsoon_ts(argument);
