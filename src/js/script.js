var $ = require("jquery");

$(document).ready(function () {
  $.getJSON('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1', {
      'type': 'meat-and-filler',
      'start-with-lorem': '1',
      'paras': '3'
    },
    function (baconGoodness) {
      if (baconGoodness && baconGoodness.length > 0) {
        $("#bacon").html('');
        for (var i = 0; i < baconGoodness.length; i++)
          $("#bacon").append('<p>' + baconGoodness[i] + '</p>');
        $("#bacon").show();
      }
    });
});
// datele din api o sa mearga in elementele HTML cu id "bacon"