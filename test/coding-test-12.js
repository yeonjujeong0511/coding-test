class Students {
  constructor(
    name,
    birth,
    number,
    NCSname,
    location,
    tel,
    email,
    className,
    classStart,
    classEnd
  ) {
    this.name = name;
    this.birth = birth;
    this.ncs = function () {
      this.number = number;
      this.NCSname = NCSname;
    };
    this.location = `${location}호`;
    this.tel = tel;
    this.email = email;
    this.className = className;
    this.classStart = classStart;
    this.classEnd = classEnd;
    this.classnum = function () {
      this.count = 0;
      this.count++;
      return `${location}-${count}`;
    };
  }
  get birth() {
    return this._birth;
  }
  set birth(value) {
    return (this._birth = str(value));
  }
}
const student1 = new Students(
  "정연주",
  19930511,
  "1",
  "정보기술개발",
  "305",
  "010-3375-0273",
  "yeonju0511@gmail.com",
  "KDT",
  "2022-07-19",
  "2023-01-05"
);

console.log(student1);
