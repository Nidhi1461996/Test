function arrowFunc(input){
  if(input.length===0){
    return "";
  }
  let result=input.map(x => x[0])
    .reduce((sol , x) => sol + x);
  return result;
}

//what is haveBeenCollectedWith
//testcase with length of the string

module.exports=arrowFunc;
