function templateString(){
  let lowerCaseName= process.argv[2].toLowerCase();
  return `Hello, ${process.argv[2]}!
Your name lowercased is "${lowerCaseName}"`;
}

module.exports=templateString;

//null and undefined testcases
//use tomatch instead of toBe as toBe is caseInsensitive
//use back tick even in testcases
