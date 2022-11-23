import random
my_expend_item = {
    "출퇴근비용": {
        "카카오톡자전거": "1500원",
        "택시": "3500원",
    },
    "커피": {
        "엔시나": "4500원",
        "카누": "200원",
    },
    "고양이간식": {
        "닭고기": "400원",
        "락토프리우유": "800원",
    }
}
my_expend_list = {
    "출퇴근비용": {
        "카카오톡자전거": "19회",
        "택시": "3회",
    },
    "커피": {
        "엔시나": "6잔",
        "카누": "15잔",
    },
    "고양이간식": {
        "닭고기": "30개",
        "락토프리우유": "2개",
    }
}


def commingsoon(name, money, game, game_price, expend_item, expend_list):

    # 고정지출 항목의 세개의 객체들중에 각 객체의 요소의 키의 값들만 배열에 담아주었다.
    arr1 = []
    for value in expend_item.values():
        a = value
        for value in a.values():
            arr1.append(value)

# 고정지출 내역의 세개의 객체들중에 각 객체의 요소의 키의 값들만 배열에 담아주었다.
    arr2 = []
    for value in expend_list.values():
        a = value
        for value in a.values():
            arr2.append(value)

    # 위에 받아온 리스트 중에, 1번 문자'원'을 없애고, 숫자형으로 만들어줘야한다.
    # 2. 숫자로 나온 값들은 expend_list_arr 리스트에 넣어준다.
    expend_list_arr = []
    for i in range(len(arr1)):
        expend_list_arr.append(int((arr1[i][0:len(arr1[i])-1])))

    # 위에 받아온 리스트 중에, 1번 문자'원'을 없애고, 숫자형으로 만들어줘야한다.
    # 2. 숫자로 나온 값들은 expend_list_arr 리스트에 넣어준다.
    expend_item_arr = []
    for i in range(len(arr2)):
        expend_item_arr.append(int((arr2[i][0:len(arr2[i])-1])))

  # 총 고정지출의 합계를 구하기 위해서,
  # 위에 각 고정지출 항목과 고정지출 내역을 순서대로 값만 배열에 받아온것을 곱해준다.
    total_expend_arr = []
    for i in range(len(expend_list_arr)):
        total_expend_arr.append(expend_list_arr[i]*expend_item_arr[i])

    # 현재 지출 합계를 구해주기 위해서 위에 곱한 값을 배열에 담은 것들을
    # 배열의 요소들은 모두 더해, 현재 지출 합계를 구했다.
    # 현재 지출 합계
    total_expend = sum(total_expend_arr)

    # 고정 지출 예산 - 현재 지출 합계
    # 남은 예산
    remain_money = money - total_expend

    # 목표 게임의 가격 - 남은 예산
    # 부족한 금액(필요한 금액)
    need_money = game_price - remain_money

    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)
    print(num1)
    print(expend_list_arr[0])
    bycicle = expend_list_arr[0]
    taxi = expend_list_arr[1]
    coffee1 = expend_list_arr[2]
    coffee2 = expend_list_arr[3]
    result = bycicle * num1 + taxi * num1 * 2 + coffee1 * num1 * 5 + coffee2 * num2
    print(result)
    print(need_money)
    while (need_money < result < need_money + 2000):
        print(
            "자전거 {num1}번, 택시 {num1} 번, 엔시나 {num2}번 카누 {num2}번 줄인다".format(num1=num1, num2=num2))
        break
    print("{name}님은 {num1}회 일찍 일어나면 {num1}만큼 피곤해지고, 카드를 {num2}번 훔치면 {num2}의 미움을 받지만, {game}을 살 수 있습니다.".format(
        name=name, num1=num1+num1, num2=num2+num2, game=game))


commingsoon(
    "공미남",
    100000,
    "포켓몬 게임",
    64800,
    my_expend_item,
    my_expend_list
)
