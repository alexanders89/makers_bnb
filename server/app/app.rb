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

  get '/users' do
    User.all.to_json
  end

  post '/users/new' do
    User.create(firstName: params['firstName'],
                userName: params['userName'],
                email: params['email'],
                password: params['password'])
    redirect '/users'
  end

  get '/spaces' do
    Space.all.to_json
  end

  post '/spaces/new' do
    Space.create(name: params['name'], description: params['description'])
    redirect '/spaces'
  end

  run! if app_file == $0
end
