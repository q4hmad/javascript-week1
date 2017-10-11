import { Poem } from './../js/haiku.js';

describe('Poem', function() {
  it("will show input on page", function() {
  var word = new Poem("hello");
  expect(word.checkTest()).toEqual("HELLO");
  });
});
