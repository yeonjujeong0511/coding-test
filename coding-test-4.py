# 지불금액: pay_money
# 총 합계: total_price
# 거스름돈: change_money

money_list = [50000, 10000, 500, 100, 50, 10]
change_list = []


def change_money(pay_money, total_price):
    money = pay_money - total_price
    i = 0

    while i < len(money_list):
        if (money > money_list[i]):
            change_list.append(money // money_list[i])
            money = money - money_list[i] * (money // money_list[i])
        else:
            change_list.append(0)
        i = i+1
    return print(change_list)


change_money(100000, 34830)
