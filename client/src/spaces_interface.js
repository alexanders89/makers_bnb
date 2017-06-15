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
        dataType: 'String';
        // var spaces = data
        // var space = spaces.map(JSON.parse);
        // console.log(space);
        var spaces = JSON.parse(data);
        // var space = id.name.description
        // for (var space in spaces) {
        //   console.log();
        // }
        // for (i = 0; i < spaces.length; i++) {
        //   $('space-list').text(spaces[i]);
        // }

    //     $('#space-list').text(function() {
    //       for (i = 0; i < spaces.length; i++) {
    //      spaces[0]['name'];
    //    }
    //  });
        console.log(spaces[0]);
        console.log(spaces[1]);

        for (i = 0; i < spaces.length; i++) {
          // $('#space-list').append(spaces[0]);
          $('ul').append('<li>'+ "NAME: " + spaces[i].name + ": " + "SPACE: " + spaces[i].description + '</li>');
        }
      });
    }

});
