function rest(...input){
  let avg = input.reduce((sum, value) => sum + value,0);
  if(input.length===0){
    return null;
  }
  return avg/input.length;


}

module.exports=rest;
