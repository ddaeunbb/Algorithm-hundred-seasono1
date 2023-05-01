function updown(input){
  let [ size ,plan] = input.split('\n');
  const location = [1,1];
  plan = plan.split(' ');

  for (const el of plan){
    if (el === 'R') location[1] < size  && location[1]++;
    else if (el === 'L') location[1] > 1 && location[1]--;
    else if (el === 'U') location[0] > 1 && location[0]--;
    else if (el === 'D') location[0] < size && location[0]++;
  }
  return location
}

console.log(updown(`5
R R R U D D`))