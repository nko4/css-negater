var target = 0;
$('#parse').on('submit', function(e) {
  var $this = $(this);
  var url = $('#url').val();
  target++;
  this.target = "output"+target;
  $('<iframe id="output'+target+'" name="output'+target+'"></iframe>').appendTo('body');
  var options = $('input[type=checkbox]');
  var optionsArray = new Array(options.length);
  var optionsBinaryMask;
  options.each(function(index, checkbox) {
    optionsArray[index] = +checkbox.checked;
  });
  $('#options').val(parseInt(optionsArray.join(""), 2));
});

// TODO: Store and provide a way to share the generated negation CSS?
// TODO: Create a bookmarklet that will allow you to embed the negation CSS?
// TODO: Capture the list of negated CSS URLs per user and re-present them to the user.