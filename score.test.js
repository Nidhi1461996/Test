const score = require('./score');
// test('adds 1 + 2 to equal 3', function() {
//   expect(sum(1, 2)).toBe(3);
// });


describe('Inputs without spare or strike', () => {
  test('With scores not equal to zero', () =>{
    expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
});
