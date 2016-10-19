require 'faye/websocket'

module Botty
  class FayeMiddleware
    def initialize(app)
      @app = app
    end

    def call(env)
      if Faye::WebSocket.websocket?(env)
        Channel.set_socket(Faye::WebSocket.new(env))

        Channel.instance.response
      else
        @app.call(env)
      end
    end
  end
end
