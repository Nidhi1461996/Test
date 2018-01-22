function destructuring(input){

  let result = {};

  [, result.username, result.email] = input;

  return result;

}
//console.log(destructuring([2, "fbar", "foo@bar.com", 23]));


module.exports=destructuring;
