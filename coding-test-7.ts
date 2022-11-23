function text_listup(data: string) {
  // 1. 특수문자 및 공백을 제외하는 값을 reg에 담아줬다.
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;

  /* 2. data의 특수문자, 공백을 제외한 문자만 남게 해준다. */
  const setData = data.replace(reg, "");

  //  대소문자 변환 때문에, 알파벳만 있는지 확인을 한다.
  const regex = /^[a-z|A-Z]+$/;

  /*3. 알파벳이 있다면, 모두 소문자로 변환후
  문자만 남은 데이터를 한 글자씩 데이터에 담아준다.
  알파벳이 없다면, 그냥 한 글자씩 데이터에 담아준다. */

  const dataArr = regex.test(setData)
    ? setData.toLowerCase().split("")
    : setData.split("");
  console.log(dataArr);

  /* 배열에 담은 글자들을 글자들의 개수를 누적시켜 각 글자마다 몇개씩 있는지 객체에 담아준다. */

  const textNumber = dataArr.reduce(
    (allText: { [key: string]: number }, text) => {
      if (text in allText) {
        //
        allText[text]++;
      } else {
        allText[text] = 1;
      }
      return allText;
    },
    {}
  );

  /* 조건 3은 해결하지 못하여 
  처음 문장의 음절을 5개씩 묶어서 한 문장으로 출력하였다. */
  let wordsArr = [];
  for (let i = 0; i < setData.length; i += 5) {
    let a = setData.slice(i, i + 5);
    wordsArr.push(a);
  }

  return {
    "각 문자의 개수": textNumber,
    "5개의 음절": `${wordsArr.join(" ")}`,
  };
}

const fromInput =
  " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) ";

text_listup(fromInput);
console.log(text_listup(fromInput));
