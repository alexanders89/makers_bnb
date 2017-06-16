$(document).ready(function() {
  var server = 'http://localhost:9292'

  $('#sign-in').on('click', function(){
    userName = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    signInUser(userName, password);
  });

  function signInUser(userName, password) {
    $.post(server + '/users/signin', {"userName": userName, "password": password});
  }

});
