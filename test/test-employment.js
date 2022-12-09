// 결과를 객체로

// function employment(object) {

//   return {
//     companyName: "",
//     mainStack: [],
//     subStack: [],
//     businessModel: [] || "",
//     positiveFeather: [],
//     negativeFeather: [],
//   };
// }

function employment(object) {
  let name = object.name;
  class Company {
    constructor(name) {
      this.name = name;
    }
    result() {
      console.log(`이름은 ${this.name}`);
    }
  }
  return Company;
}
