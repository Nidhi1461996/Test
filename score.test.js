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
  test('With strike in the first chance', () =>{
    expect(score([10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(100);
  });

  test('With strike in the middle', () =>{
    expect(score([3, 6, 3, 6, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(100);
  });

});


describe('Inputs with strikes and spares not in the 10th frame', () => {
  test('With strike in the first frame and spare in the second frame', () =>{
    expect(score([10, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(108);
  });

  test('With strike and spare in the middle', () =>{
    expect(score([3, 6, 3, 6, 10, 6, 3, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(107);
  });

  test('With spare in the first frame and strike in the middle', () =>{
    expect(score([4, 6, 3, 6, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(104);
  });

});




describe('Inputs with multiple spares', () => {
  test('With two consecutive spares', () =>{
    expect(score([4, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(99);
  });

  test('With not consecutive spares', () =>{
    expect(score([3, 6, 4, 6, 3, 6, 3, 7, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(103);
  });

  test('With all astrikes except the last frame', () =>{
    expect(score([4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 3, 6])).toBe(134);
  });

});
