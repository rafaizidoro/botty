require 'json'
require "sinatra/base"
require "sinatra/reloader"

module Botty
  class Api < Sinatra::Base
    configure :development do
      register Sinatra::Reloader
    end

    get '/api' do
      content_type :json

      {a: "Facebook Messenger", b: 2, c: 5}.to_json
    end
  end
end
