function max(numbers){
  var min = Math.min(...numbers);
  if(numbers.length===0){
    return null;
  }
  return `The minimum of [${numbers}] is ${min}`;
}

module.exports=max;
