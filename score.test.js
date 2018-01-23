const score = require('./score');

describe('Inputs without spare or strike', () => {
  test('With scores not equal to zero', () =>{
    expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
});
