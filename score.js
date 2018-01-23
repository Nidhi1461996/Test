

function score(input){
  let totalScore=0;
  let length=input.length;

  for(let i=1;i<length;i+=2){

    if(input[i]+input[i-1]===10){
      let temp = input[i] + input[i-1];
      totalScore+=temp;
      totalScore+=input[i+1];
    }
    else{
      let temp = input[i] + input[i-1];
      totalScore+=temp;
    }

  }

  return totalScore;
}

module.exports=score;
