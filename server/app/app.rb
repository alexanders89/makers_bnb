require 'sinatra/base'
require_relative 'datamapper_setup'

class MakersBnb < Sinatra::Base

  get '/' do
    'Hello Makers BnB'
  end

  get '/spaces' do
    Space.all.to_json
  end

  get 'spaces/new' do
    
  end

  run! if app_file == $0

end
