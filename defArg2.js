
function defArg2(input, exclamation = input.length){

  if(exclamation<0){
    return null;
  }

  return input + '!'.repeat(exclamation);
}

module.exports=defArg2;
