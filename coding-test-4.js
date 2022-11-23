var money_list_ts = [50000, 10000, 500, 100, 50, 10];
var money_list_kor_ts = [
    "오만원권",
    "만원권",
    "오백원권",
    "백원권",
    "오십원권",
    "십원권",
];
var change_list_ts = [];
function change_money_ts(pay_money, total_price) {
    var money = pay_money - total_price;
    //console.log(money);
    for (var i = 0; i < money_list_ts.length; i++) {
        if (money > money_list_ts[i]) {
            //console.log(`${money_list[i]}원 : ${parseInt(money / money_list[i])}개`);
            change_list_ts.push("".concat(Math.floor(money / money_list_ts[i])));
            money = money - money_list_ts[i] * Math.floor(money / money_list_ts[i]);
            //console.log(money);
        }
        else {
            //console.log(`${money_list[i]}권 : 0개`);
            change_list_ts.push(0);
        }
    }
    var result = money_list_kor_ts.reduce(function (acc, curr, idx) {
        acc[curr] = change_list_ts[idx];
        return acc;
    }, new Object());
    return console.log(result);
}
change_money_ts(100000, 34830);
