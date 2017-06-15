$(document).ready(function() {
  var server = 'http://localhost:9292'

  $('#sign-in').on('click', function(){
    console.log('frst console log');

    userName = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    console.log(userName)
    console.log(password)
    signInUser(userName, password);
  });

  function signInUser(userName, password) {
    console.log('Hey there');
    $.post(server + '/users/signin', {"userName": userName, "password": password});
  }

});
