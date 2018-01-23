

function score(input){
  let totalScore=0;
  let length=input.length;

  for(let i=1;i<length;i+=2){

    if(input[i]+input[i-1]===10){
      let temp = input[i] + input[i-1];
      totalScore+=temp;
      totalScore+=input[i+1];
    }

    else if(input[i]===10){
      let temp=input[i-1]+input[i]+input[i+1];
      totalScore+=temp;

    }

    else if(input[i-1]===10){
      let temp=input[i-1]+input[i]+input[i+1];
      totalScore+=temp;
      i=i-1;
    }

    else{
      let temp = input[i] + input[i-1];
      totalScore+=temp;

    }

  }

  return totalScore;
}

module.exports=score;

//console.log(score([10, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3]));
