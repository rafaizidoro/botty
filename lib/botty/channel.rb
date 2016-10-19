class Channel
  def initialize(socket)
    @socket = socket
  end

  def message(message)
    @socket.send(message)
  end

  def register_events
    @socket.on :message do |event|
      p [:message, event.data]
      @socket.send(event.data)
    end
  end

  def response
    @socket.rack_response
  end

  class << self
    @channel = nil

    def set_socket(socket)
      @channel = new(socket)
      @channel.register_events

      @channel
    end

    def instance
      raise 'There is no available socket connection' unless @channel

      @channel
    end
  end

  private_class_method :new
end
