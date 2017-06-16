$(document).ready(function() {
  var user = new User();
  var server = 'http://localhost:9292'

  $('#sign-up').on('click', function() {
    firstName = document.getElementById("firstName").value;
    user.editFirstName(firstName);
    userName = document.getElementById("userName").value;
    user.editUserName(userName);
    email = document.getElementById("email").value;
    user.editEmail(email);
    password = document.getElementById("password").value;
    user.editPassword(password);
    storeNewUser();
  });

  function storeNewUser() {
    $.post(server + '/users/new', {"firstName": user.firstName, "userName": user.userName, "email": user.email, "password": user.password})
  };
});
