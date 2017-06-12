require 'sinatra/base'
require_relative 'datamapper_setup'

class MakersBnb < Sinatra::Base

  get '/' do
    erb :signup
  end

  post '/listings' do
    'Thanks for signing up!'

  end


run! if app_file == $0

end
