def game_money(leather, time):
    silver = leather * 2
    totalCopper = silver * 8
    # 가죽 개수에 따른 copper의 총 개수
    gold = totalCopper // 32
    # 총 copper개수에 gold값 환산
    copper = totalCopper % 32
    # gold로 환산하고 남은 copper의 개수
    timegold = (totalCopper * time) // 32
    # 시간에 따른 총 gold 개수
    timecopper = (totalCopper * time) % 32
    # 시간에 따른 총 copper의 개수
    return print("이날 공미남 플레이이어가 한시간 동안 플레이로 얻은 gold의 갯수는 {gold}개 입니다." "gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 {copper}개의 copper를 챙겼습니다." "공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 {timegold}gold, {timecopper}copper를 얻었습니다.".format(gold=gold, copper=copper, timegold=timegold, timecopper=timecopper))


game_money(45, 8)
#     return `"이날 공미남 플레이이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${gold}개 입니다."
#     "gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ${copper}개의 copper를 챙겼습니다."
#     "공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ${timegold}gold, ${timecopper}copper를 얻었습니다."
#   `
# }
