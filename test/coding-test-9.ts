const shape_array = ["spade", "heart", "diamond", "club", "joker"];
function trump_deck(shapeArray: string[]) {}

trump_deck(shape_array);

let array: number[] = [];
for (let i = 1; i < 14; i++) {
  array.push(i);
}

console.log(array);
const shape: any[] = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const result = shape.reduce((acc, curr, idx) => {
  return { ...acc, [curr]: array[idx] };
}, new Object());

console.log(result);

// console.log(JSON.stringify(result));

const joker = ["RED", "BLACK"];
