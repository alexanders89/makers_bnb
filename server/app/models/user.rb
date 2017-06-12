class User

  include DataMapper::Resource

  property :id, Serial
  property :email, String
  property :password, String
  property :password_confirm, String

end
