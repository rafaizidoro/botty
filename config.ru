require "./lib/botty"

Rack::Handler.default.run(Botty::Api, :Port => 8889)
