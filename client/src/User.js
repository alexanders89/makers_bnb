function User (first, username, email, password) {
  this.firstName = first;
  this.userName = username;
  this.email = email;
  this.password = password;

};



User.prototype.getFirstName = function (firstName) {
  return this.firstName = firstName;
};

User.prototype.getUserName = function (userName) {
  return this.userName = userName;
};

User.prototype.getEmail = function (email) {
  return this.email = email;
};

User.prototype.getPassword = function (password) {
  return this.password = password;
};
