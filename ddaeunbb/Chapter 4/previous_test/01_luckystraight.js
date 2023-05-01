function solution(input){
  input = `${input}`.split('');
  let count1 = 0;
  let count2 = 0;
  let half = input.length / 2 - 1;
  for (let i = 0; i < input.length; i++){
    if( i <= half) count1+= Number(input[i]);
    else count2+= Number(input[i])
  }
  return count1 === count2 ? 'LUCKY' : 'READY'
}

console.log(solution(123402))
console.log(solution(7755))