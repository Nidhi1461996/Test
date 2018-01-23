let totalScore=0;

function score(input){

  let length=input.length;

  for(let i=0;i<length;i++){
    totalScore+=input[i];
  }

  return totalScore;
}


module.exports=score;
