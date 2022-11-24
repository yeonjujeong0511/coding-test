// 매개변수 score3:3점슛 개수 totalSore:경기 총 점수 score2percent:2점슛의 비율 score1percent:자유투 비율
function score_analysis2(
  score3: number,
  totalScore: number,
  score2percent: number,
  score1percent: number
) {
  const totalScore3 = score3 * 3;
  const score1PlusScore2 = totalScore - totalScore3;
  const totalScore2 = score1PlusScore2 * score2percent * 0.01;
  const score2Number = totalScore2 / 2;
  const totalScore1 = score1PlusScore2 * score1percent * 0.01;

  // totalScore2는 2점슛의 총합
  // totalScore3는 3점의 총합
  // score1PlusScore2는 3점을 제외한 2점슛과 자유투의 합
  // score2Number는 2점슛의 개수
  // totalScore1는 1점슛의 총합

  return `"KDT팀이 이 날 성공한 2점슛은 총 ${score2Number}회 입니다.`;
}
