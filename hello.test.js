const hello = require('./hello');

test('Prints HELLO ES6', function() {
  expect(hello()).toBe('HELLO ES6');
});
