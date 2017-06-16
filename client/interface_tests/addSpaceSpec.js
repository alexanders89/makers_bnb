var spacesNameTest = function() {
  var name = $('#space-name');
  var description = $('#space-description');
  var price = $('#space-price');


  name.val('Donald Trump');
  description.val('white house');
  price.val(100);
  var button = $('#space-add');
  button.click();
  window.open('spaceList.html');
  return $(document).text().includes('Donald');
}

var spacesDescriptionTest = function() {
  var name = $('#space-name');
  var description = $('#space-description');
  var price = $('#space-price');

name.val('Donald Trump');
description.val('white house');
price.val(100);
var button = $('#space-add');
button.click();
window.open('spaceList.html');
return $(document).text().includes('white');
}

var spacesPriceTest = function() {
  var name = $('#space-name');
  var description = $('#space-description');
  var price = $('#space-price');

name.val('Donald Trump');
description.val('white house');
price.val(100);
var button = $('#space-add');
button.click();
window.open('spaceList.html');
return $(document).text().includes(100);
}

  function runTest() {
    console.log("Name: " + spacesNameTest());
    console.log("Description: " + spacesDescriptionTest());
    console.log("Price: " + spacesPriceTest());
  }
