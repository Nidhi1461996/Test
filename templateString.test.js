const tempString=require('./templateString');

test('The string will evaluate to', function(){
  expect(tempString('NIDHI')).toBe(`Hello, templateString.test.js!
Your name lowercased is "templatestring.test.js"`);
});
