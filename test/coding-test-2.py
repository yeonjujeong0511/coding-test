# 매개변수 score3: 3점슛 개수 totalSore: 경기 총 점수 score2percent: 2점슛의 비율 score1percent: 자유투 비율
def score_analysis(score3, totalScore, score2percent, score1percent):
    totalScore3 = score3 * 3  # totalScore3는 3점의 총합
    score1PlusScore2 = totalScore - totalScore3
    totalScore2 = int(score1PlusScore2 * score2percent * 0.01)
    score2Number = int(totalScore2 / 2)
    totalScore1 = int(score1PlusScore2 * score1percent * 0.01)
    # score1PlusScore2는 3점을 제외한 2점슛과 자유투의 합
    # totalScore2는 2점슛의 총합
    # score2Number 2점슛의 개수
    # totalScore1는 1점슛의 총합
    return print("KDT팀이 이 날 성공한 2점슛은 총 {score2Number}회 입니다.".format(score2Number=score2Number))


score_analysis(16, 84, 50, 50)
