var spacesListTest = function() {
  var name = $('#space-name');
  var description = $('#space-description');


  name.val('Donald Trump');
  description.val('white house');
  var button = $('#space-add');
  button.click();
  window.open('spaceList.html');
  console.log($(document).text());
  return $(document).text().includes('Donald'); 
}

  function runTest() {
    console.log(spacesListTest());
  }
