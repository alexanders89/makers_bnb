$(document).ready(function() {
  var space = new Space();
  var server = 'http://localhost:9292'

  listSpaces();
  getCurrentUser();

  $('#space-add').on('click', function(){
    var name = document.getElementById("space-name").value;
    space.editName(name);
    var description = document.getElementById("space-description").value;
    space.editDescription(description);
    storeNewSpace()
  });

  function storeNewSpace() {
    $.post(server + '/spaces/new', {"name": space.name, "description": space.description});
  }

  function listSpaces() {
    $.get(server + '/spaces', function (data){
      console.log(data);
      var spaces = JSON.parse(data);
      for (i = 0; i < spaces.length; i++) {
        $('ul').append('<li>'+ "NAME: " + spaces[i].name + ": " + "SPACE: " + spaces[i].description + '</li>');
      }
    });
  }

  function getCurrentUser() {
    $.get(server + '/users', function(data) {
      var userData = JSON.parse(data);
      var currentUser = userData[0].firstName;
      $('#welcome').text('Hello ' + currentUser);
    });
  }

});
