require 'data_mapper'
require 'dm-postgres-adapter'
require_relative 'models/space'
require_relative 'models/user'

DataMapper.setup(:default, 'postgres://localhost/makersbnb_test')
DataMapper.finalize
DataMapper.auto_upgrade!
