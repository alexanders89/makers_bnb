describe('User', function() {
  var user;

  beforeEach(function() {
    user = new User("dave", "dave90", "dave@dave.com", "1234567");
  });

  it('is initialized with a first name', function() {
    expect(user.getFirstName()).toEqual("dave")
  });

  it('is initialized with a username', function() {
    expect(user.getUserName()).toEqual("dave90")
  });

  it('is initialized with a email', function() {
    expect(user.getEmail()).toEqual("dave@dave.com")
  });

  it('is initialized with a password', function() {
    expect(user.getPassword()).toEqual("1234567")
  });

  it('is able to change name', function(){
    user.editFirstName("Updated FirstName");
    expect(user.getFirstName()).toEqual("Updated FirstName")
  });

  it('is able to change User Name', function(){
    user.editUserName("Updated UserName");
    expect(user.getUserName()).toEqual("Updated UserName")
  });

  it('is able to change Email', function(){
    user.editEmail("Updated Email");
    expect(user.getEmail()).toEqual("Updated Email")
  });

  it('is able to change password', function() {
    user.editPassword("Updated Password");
    expect(user.getPassword()).toEqual("Updated Password")
  });
});
