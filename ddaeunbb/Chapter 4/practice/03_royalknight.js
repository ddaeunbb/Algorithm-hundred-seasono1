function solution(input){
  input = input.split('');
  const dict = { 'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5, 'f' : 6, 'g' : 7, 'h' : 8};
  const location = [dict[input[0]], Number(input[1])];
  const steps = [[-2, -1], [-1,-2], [1,-2], [2,-1], [2,1], [1,2], [-1,2], [-2,1]];
  let count = 0;

  for (let el of steps){
    let dx = location[0] + el[0];
    let dy = location[1] + el[1];
    if (dx >= 1 && dy >=1 ) count++;
  }
  return count
}


console.log(solution('a1'));