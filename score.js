

function score(input){
  let totalScore=0;
  let length=input.length;

  for(let i=0;i<length;i++){
    totalScore+=input[i];
  }

  return totalScore;
}

module.exports=score;
