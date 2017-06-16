var signInTest = function () {
  var userName = $('#userName');
  var password = $('#password');
  var button = $('#sign-in');

  userName.val('Henry90');
  password.val('H3nry');
  button.click();
  window.open('spaces.html')
  return $('#welcome').text() === "Hello Henry"

}

function runTests() {
  console.log(signInTest());
}
