function squareSum(numbers){
  let sum = 0;
  numbers.forEach((item) =>{
    sum += item*item;
  })
  return sum;
}