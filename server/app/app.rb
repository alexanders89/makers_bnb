require 'sinatra/base'
require_relative 'datamapper_setup'

class MakersBnb < Sinatra::Base

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/' do
    "Hello Makers BnB"
  end

  post '/users/new' do
    User.create(firstName: params['first'], userName: params['username'], email: params['email'], password: params['password'] )
    redirect '/listings'
  end

  get '/listings' do
    'Thanks for signing up!'

  end


run! if app_file == $0

end
