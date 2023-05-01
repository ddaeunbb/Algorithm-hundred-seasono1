function sight(input){
  let count = 0;
  for (let i = 0 ; i <= input; i++ ){
    for(let j = 0; j < 60; j++){
      for(let k = 0; k < 60; k++){
        `${i}${j}${k}`.includes('3') && count++
      }
    }
  }

  return count;
}

console.log(sight(5))