var my_expend_item_ts = {
    출퇴근비용: {
        카카오톡자전거: "1500원",
        택시: "3500원"
    },
    커피: {
        엔시나: "4500원",
        카누: "200원"
    },
    고양이간식: {
        닭고기: "400원",
        락토프리우유: "800원"
    }
};
var my_expend_list_ts = {
    출퇴근비용: {
        카카오톡자전거: "19회",
        택시: "3회"
    },
    커피: {
        엔시나: "6잔",
        카누: "15잔"
    },
    고양이간식: {
        닭고기: "30개",
        락토프리우유: "2개"
    }
};
var argument = {
    name: "공미남",
    money: 100000,
    game: "포켓몬 게임",
    game_price: 64800,
    expend_item: my_expend_item_ts,
    expend_list: my_expend_list_ts
};
function commingsoon_ts(value) {
    var expend_item = value.expend_item;
    var expend_list = value.expend_list;
    var arr1 = [];
    Object.keys(expend_item).forEach(function (key) {
        var a = expend_item[key];
        Object.keys(a).forEach(function (key) {
            var b = a[key];
            arr1.push(b);
        });
    });
    var arr2 = [];
    Object.keys(expend_list).forEach(function (key) {
        var a = expend_list[key];
        Object.keys(a).forEach(function (key) {
            var b = a[key];
            arr2.push(b);
        });
    });
    var item_price_arr_ts = [];
    for (var i = 0; i < arr1.length; i++) {
        var a = parseInt(arr1[i]);
        item_price_arr_ts.push(a);
    }
    console.log(item_price_arr_ts);
    var list_price_arr = [];
    for (var i = 0; i < arr2.length; i++) {
        var a = parseInt(arr2[i]);
        list_price_arr.push(a);
    }
    console.log(list_price_arr);
    // 총 고정지출의 합계를 구하기 위해서,
    // 위에 각 고정지출 항목과 고정지출 내역을 순서대로 값만 배열에 받아온것을 곱해준다.
    var total_expend_arr = [];
    for (var i = 0; i < arr1.length; i++) {
        total_expend_arr.push(item_price_arr_ts[i] * list_price_arr[i]);
    }
    // 현재 지출 합계를 구해주기 위해서 위에 곱한 값을 배열에 담은 것들을
    // 배열의 요소들은 모두 더해, 현재 지출 합계를 구했다.
    // 현재 지출 합계
    var total_expend = total_expend_arr.reduce(function (a, b) { return a + b; });
    // 고정 지출 예산 - 현재 지출 합계
    // 남은 예산
    var remain_money = value.money - total_expend;
    //목표 게임의 가격 - 남은 예산
    // 부족한 금액(필요한 금액)
    var need_money = value.game_price - remain_money;
    // 랜덤구하는 함수
    function random() {
        return Math.floor(Math.random() * 10);
    }
    var num1 = random();
    var num2 = random();
    var bycicle = item_price_arr_ts[0];
    var taxi = item_price_arr_ts[1];
    var coffee1 = item_price_arr_ts[2];
    var coffee2 = item_price_arr_ts[3];
    var result = bycicle * num1 + taxi * num1 * 2 + coffee1 * num1 * 5 + coffee2 * num2;
    while (result > need_money && result < need_money + 2000) {
        console.log("\uC790\uC804\uAC70 ".concat(num1, "\uBC88, \uD0DD\uC2DC ").concat(num1 * 2, "\uBC88 , \uC5D4\uC2DC\uB098 ").concat(num2 * 5, "\uBC88 , \uCE74\uB204 ").concat(num2, "\uBC88 \uC904\uC778\uB2E4."));
        break;
    }
}
commingsoon_ts(argument);
