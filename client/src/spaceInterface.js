$(document).ready(function() {
  var space = new Space();
  var server = 'http://localhost:9292'

  getCurrentUser();

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

  function getCurrentUser() {
    $.get(server + '/spaces', function(data) {
      var userData = JSON.parse(data);
      var currentUser = userData[0].firstName;
      $('#welcome').text('Hello ' + currentUser);
    });
  }

});
