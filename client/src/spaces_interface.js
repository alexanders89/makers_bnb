$(document).ready(function() {
  var space = new Space();
  var server = 'http://localhost:9292'
    listSpaces();

  $('#space-add').on('click', function(){
    name = document.getElementById("space-name").value;
    space.editName(name);
    description = document.getElementById("space-description").value;
    space.editDescription(description);
    price = document.getElementById("space-price").value;
    space.editPrice(price);
    storeNewSpace()
  });

  function storeNewSpace() {
    $.post(server + '/spaces/new', {"name": space.name, "description": space.description, "price": space.price});
  }


    function listSpaces() {
      $.get(server + '/spaces', function (data){
        var spaces = JSON.parse(data);
        for (i = 0; i < spaces.length; i++) {
          $('ul').append('<li>'+ "NAME: " + spaces[i].name + "  " + "SPACE: " + spaces[i].description + "  PRICE: " + spaces[i].price + '</li>');
        }
      });
    }

});
