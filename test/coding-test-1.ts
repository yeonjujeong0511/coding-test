// 농구팀 점수 분석하기
// - 실제 코딩테스트 대비반에서 풀어보는 모의고사용 문제 중 일부를 적정수준으로 맞춘 문제입니다.

// 도전과제 : 농구팀 KDT 팀이 11월11일에 치룬 경기에서 획득한 점수 분석하기
// 농구규칙 1 : 3점슛 : 3점 획득, 2점슛 : 2점 획득, 자유투 : 1점획득
// 농구규칙 2 : 자유투는 한 번 진행에 2번의 기회를 얻음
// 사용언어 : javascript, typescript, python

// 함수 이름 : score_analysis()
// 경기에서 획득한 총 점수 : 84점

// 전개 1. 농구팀 KDT팀은 11월11일에 경기를 치루어 총 84점의 점수로 승리하였습니다.
// 전개 2. 이날 중거리 슈터였던 선수 공미남은 3점슛을 무려 16개나 쏘아 올렸습니다.
// 전개 3. 3점슛을 제외한, 2점슛과 자유투로 얻은 점수의 각각의 비율은 50%입니다.

// 출력
// "KDT팀이 이 날 성공한 2점슛은 총 A회 입니다."
// "그리고 상대팀으로부터 자유투를 B번 획득해, 총 C개의 자유투를 성공하였습니다."
// "이 날 KDT팀의 자유투 성공률은 D% 입니다."

// 문제 
// 출력부분 A, B, C, D에 대한 값을 산출하여 위 형태와 같은 세개의 문장과 값이 도출되어 출력가능한 알고리즘을 제작하시오.
// 조건 1: "다른 팀", "다른 선수", "다른 경기"에서도 산출 할 수 있도록 함수를 구성하시오.  
// 조건 2: 획득하는 모든 점수 유형은 정수(integer)여야함



function cone_volume2(radius: number, height: number) {
  if (Number.isInteger(radius) && 0 < radius && radius <= 100) {
    if (Number.isInteger(height) && 0 < height && height <= 100) {
      let radiusPow = Math.pow(radius, 2);
      let result = (Math.PI * radiusPow * height) / 3;
      return result.toFixed();
    } else {
      console.log("height가 조건과 일치하지 않습니다.");
    }
  } else {
    console.log("radius가 조건과 일치하지 않습니다.");
  }
}

console.log(cone_volume2(3, 3));
