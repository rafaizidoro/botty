require 'json'
require "sinatra/base"
require "sinatra/reloader"

module Botty
  class Api < Sinatra::Base
    configure :development do
      register Sinatra::Reloader
    end

    get '/' do
      'Botty'
    end

    post '/api' do
      Channel.instance.message(JSON.parse(request.body.read))
    end
  end
end
