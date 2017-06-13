function User (first, username, email, password) {
  this.firstName = first;
  this.userName = username;
  this.email = email;
  this.password = password;

};

User.prototype.getFirstName = function() {
  return this.firstName;
};

User.prototype.getUserName = function() {
  return this.userName;
};

User.prototype.getEmail = function() {
  return this.email;
};

User.prototype.getPassword = function() {
  return this.password;
};

User.prototype.editFirstName = function(firstName){
  this.firstName = firstName;
}

User.prototype.editUserName = function(UserName){
  this.userName = UserName;
}

User.prototype.editEmail = function(Email){
  this.email = Email;
}

User.prototype.editPassword = function(Password){
  this.password = Password;
}
