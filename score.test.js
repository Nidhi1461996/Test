const score = require('./score');

describe('Inputs without spare or strike', () => {
  test('With scores not equal to zero', () =>{
    expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });

  //with score 0

  test('With zero score included', () =>{
    expect(score([0, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(87);
  });

  test('With all scores as zero', () =>{
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  });


});


describe('Inputs with spares but not in the 10th frame', () => {
  test('With one spare', () =>{
    expect(score([4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(94);
  });

  test('With more than one spare', () =>{
    expect(score([4, 6, 3, 6, 3, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(98);
  });

});


describe('Inputs with strikes but not in the 10th frame', () => {
  test('With one spare', () =>{
    expect(score([10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(100);
  });

  // test('With more than one spare', () =>{
  //   expect(score([4, 6, 3, 10, 3, 6, 4, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(98);
  // });

});
