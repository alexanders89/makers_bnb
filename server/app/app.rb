# responsable for routing API calls
require_relative 'datamapper_setup'
require 'json'
require 'sinatra/cross_origin'
require 'sinatra/base'

class MakersBnb < Sinatra::Base
  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/' do
    'Hello Makers BnB'
  end

  post '/users/new' do
    User.create(firstName: params['first'], userName: params['username'],
                email: params['email'], password: params['password'])
    redirect '/spaces'
  end

  get '/spaces' do
    Space.all.to_json
  end

  post '/spaces/new' do
    p params
    Space.create(name: params['name'], description: params['description'])
    redirect '/spaces'
  end

  run! if app_file == $0
end
