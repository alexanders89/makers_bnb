require 'bcrypt'
require 'dm-validations'

class User
  include DataMapper::Resource

  property :id, Serial
  property :firstName, String
  property :userName, String, :required => true, :unique => true
  property :email, String, :required => true
  property :password_digest, Text

  attr_reader :password

  validates_presence_of :userName
  validates_format_of :email, :as => :email_address

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password::create(password)
  end

end
