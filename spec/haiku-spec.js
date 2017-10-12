import { Poem } from './../js/haiku.js';

describe('Poem', function() {

  it("will capitalize all input", function() {
  var word = new Poem("to", "more", "day");
  expect(word.checkTest()).toEqual([["T","O"], ["M","O","R","E"], ["D","A","Y"]]);
  });
});
