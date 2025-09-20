let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
export default function shuffleArr() {
  for (let i: number = arr.length - 1; i > 0; i--) {
    let random: number = Math.floor(Math.random() * i);
    [arr[i], arr[random]] = [arr[random]!, arr[i]!];
  }
  return arr;
}
