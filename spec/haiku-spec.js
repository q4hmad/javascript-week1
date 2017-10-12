import { Poem } from './../js/haiku.js';

describe('Poem', function() {

  it("will capitalize all input", function() {
  var word = new Poem("today", "tomorrow", "anotherday");
  expect(word.checkTest()).toEqual(["TODAY", "TOMORROW", "ANOTHERDAY"]);
  });


});
