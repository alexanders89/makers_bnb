var addNewSpace = function () {
  var button = $('#add-space');
  button.click();
  window.open('new_spaces.html')
  console.log($('#space-new').text());
  console.log('Hi mu');
  return $('#space-new').text() ==='Space Name:';
}

function runTests() {
  console.log(addNewSpace());
}
