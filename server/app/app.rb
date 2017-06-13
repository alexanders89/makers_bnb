# responsable for routing API calls
require 'sinatra/base'
require_relative 'datamapper_setup'
require 'json'
require 'sinatra/cross_origin'

class MakersBnb < Sinatra::Base

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/' do
    'Hello Makers BnB'
  end

  get '/spaces' do
    Space.all.to_json
  end

  post '/spaces/new' do
    Space.create(name: params['name'])
    redirect '/spaces'
  end

  run! if app_file == $PROGRAM_NAME
end
