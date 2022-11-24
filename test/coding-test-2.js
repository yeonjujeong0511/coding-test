// 매개변수 score3:3점슛 개수 totalSore:경기 총 점수 score2percent:2점슛의 비율 score1percent:자유투 비율
function score_analysis2(score3, totalScore, score2percent, score1percent) {
    var totalScore3 = score3 * 3;
    var score1PlusScore2 = totalScore - totalScore3;
    var totalScore2 = score1PlusScore2 * score2percent * 0.01;
    var score2Number = totalScore2 / 2;
    var totalScore1 = score1PlusScore2 * score1percent * 0.01;
    // totalScore2는 2점슛의 총합
    // totalScore3는 3점의 총합
    // score1PlusScore2는 3점을 제외한 2점슛과 자유투의 합
    // score2Number는 2점슛의 개수
    // totalScore1는 1점슛의 총합
    return "\"KDT\uD300\uC774 \uC774 \uB0A0 \uC131\uACF5\uD55C 2\uC810\uC29B\uC740 \uCD1D ".concat(score2Number, "\uD68C \uC785\uB2C8\uB2E4.");
}
