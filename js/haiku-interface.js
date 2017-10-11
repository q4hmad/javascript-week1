import { Poem } from './../js/haiku.js';

$(document).ready(function() {
  $("form#haikuForm").submit(function(event) {
    event.preventDefault();
    var test = $("#test").val();
    var testWord = new Poem(test);

    $("#solution").text(testWord.checkTest());
  });
});
