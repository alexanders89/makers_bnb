require 'sinatra/base'
require_relative 'datamapper_setup'

class MakersBnb < Sinatra::Base

  get '/' do
    'Hello World'
  end

  get '/spaces' do
    "Bobs pad"
  end

  run! if app_file == $0

end
