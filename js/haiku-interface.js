import { Poem } from './../js/haiku.js';

$(document).ready(function() {
  $("form#haikuForm").submit(function(event) {
    event.preventDefault();
    var line1 = $("#line1").val();
    var line2 = $("#line2").val();
    var line3 = $("#line3").val();
    var haikuChecker = new Poem(line1, line2, line3);

    $("#solution").text(haikuChecker.checkTest());
  });
});
