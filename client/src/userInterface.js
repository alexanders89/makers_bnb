$(document).ready(function() {
  var user = new User();
  var server = 'http://localhost:9292'

  $('#sign-up').on('click', function() {
    firstname = document.getElementById("firstName").value;
    user.editFirstName(firstname);
    username = document.getElementById("userName").value;
    user.editUserName(username);
    email = document.getElementById("email").value;
    user.editEmail(email);
    password = document.getElementById("password").value;
    user.editPassword(password);
    storeNewUser();
  });

  function storeNewUser() {
    $.post(server + '/users/new', {"first": user.firstName, "username": user.userName, "email": user.email, "password": user.password})
  };
});
