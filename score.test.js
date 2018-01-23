const score = require('./score');

describe('Inputs without spare or strike', () => {
  test('With scores not equal to zero', () =>{
    expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });

  //with score 0

  test('With zero score included', () =>{
    expect(score([0, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(87);
  });

  // test('With all scores as zero', () =>{
  //   expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  // });


});
