$(document).ready(function() {
  var space = new Space();
  var server = 'http://localhost:9292'
    listSpaces();

  $('#space-add').on('click', function(){
    name = document.getElementById("space-name").value;
    space.editName(name);
    description = document.getElementById("space-description").value;
    space.editDescription(description);
    storeNewSpace()
  });

  function storeNewSpace() {
    $.post(server + '/spaces/new', {"name": space.name, "description": space.description});
  }


    function listSpaces() {
      $.get(server + '/spaces', function (data){
        // dataType: 'String';
        var spaces = JSON.parse(data);
        for (i = 0; i < spaces.length; i++) {
          $('ul').append('<li>'+ "NAME: " + spaces[i].name + ": " + "SPACE: " + spaces[i].description + '</li>');
        }
      });
    }

});
