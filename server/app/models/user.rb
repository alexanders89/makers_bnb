class User

  include DataMapper::Resource

  property :id, Serial
  property :firstName, String
  property :userName, String
  property :email, String
  property :password, Text

end
