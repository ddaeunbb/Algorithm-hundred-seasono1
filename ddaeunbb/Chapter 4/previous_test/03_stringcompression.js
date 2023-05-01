// function solution(s){
//   let len = s.length / 2;
//   let answer = [];
//   let count = [];
//   for (let i = 1; i <= len; i++){
//     let arr = s.split('');
//     while (arr.length !== 0){
//       answer.push(arr.splice(0,i).join(''))
//     }

//     for(let j = 0; j < answer.length; j++){
//       idx = j + 1;
//       let search = 1;
//       while (answer[j] === answer[idx]){
//         search++;
//         answer[idx] = 'X';
//         idx++;
//       }
//       if (search >1 ) answer[j] = `${search}` + answer[j];
//     }
//     count.push(answer.join('').length)
//     answer=[];
//   }
//   return Math.min(...count);
// }


function solution(s){
  let min_len = s.length;
  for (let i = 1; i <= parseInt(s.length /2); i++){
    let prev = s.substr(0,i);
    let cnt = 1;
    let tmp_str = '';


    for(let k = i; k < s.length; k+=i){
      const cur = s.substr(k, i);

      if( prev === cur) cnt++;
      else {
        tmp_str += (cnt > 1 ? String(cnt) : '') + prev;
        cnt = 1;
        prev = cur;
      }
    }
    tmp_str += (cnt > 1 ? String(cnt) : '') + prev;

    min_len = Math.min(min_len, tmp_str.length);
  }

  return min_len;
}

console.log(solution('2a2ba3c'));