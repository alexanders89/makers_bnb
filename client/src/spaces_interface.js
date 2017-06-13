$(document).ready(function() {
  var space = new Space();
  var server = 'http://localhost:9292'


  $('#space-add').on('click', function() {
    storeNewSpace();
  })

  function storeNewSpace() {
    $.post(server + '/spaces/new', {"name": space.name});
  }

});
