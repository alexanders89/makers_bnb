describe('User', function() {
  var user;

  it('is initialized with a first name', function() {
    user = new User("dave", "dave90", "dave@dave.com", "1234567");
    expect(user.getFirstName()).toEqual("dave")
  });

  it('is initialized with a username', function() {
    user = new User("dave", "dave90", "dave@dave.com", "1234567");
    expect(user.getUserName()).toEqual("dave90")
  });

  it('is initialized with a email', function() {
    user = new User("dave", "dave90", "dave@dave.com", "1234567");
    expect(user.getEmail()).toEqual("dave@dave.com")
  });

  it('is initialized with a password', function() {
    user = new User("dave", "dave90", "dave@dave.com", "1234567");
    expect(user.getPassword()).toEqual("1234567")
  });

});
