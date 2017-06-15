var signUpTest = function () {
  var firstName = $('#firstName');
  var userName = $('#userName');
  var email = $('#email');
  var password = $('#password');

  var button = $('#sign-up');
  firstName.val('Henry');
  userName.val('Henry90');
  email.val('Henry@henry.com');
  password.val('H3nry');
  button.click();
  window.open('spaces.html')
  return $('#welcome').text() === "Hello Henry"

}


function runTests() {
  console.log(signUpTest());
  // signUpTest();
}
