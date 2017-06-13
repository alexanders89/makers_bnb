# resposable for persisting information about spaces
class Space

  include DataMapper::Resource

  property :id, Serial
  property :name, String

end
