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
      $.get('http://localhost:9292/spaces', function (data){
        $.each(data, function(data) {
          alert(data.name)
        });
        $('#space-list').text(data);
        console.log(data)
      });
  }

});
