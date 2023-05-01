function solution(input){
  let number = input.match(/[0-9]/g);
  let string = input.match(/[A-Z]/gi);
  string.sort()
  number = number.reduce((acc,cur)=> acc + Number(cur), 0);
  return `${string.join('')}${number}`
}

console.log(solution('K1KA5CB7'));
console.log(solution('AJKDLSI412K4JSJ9D'));