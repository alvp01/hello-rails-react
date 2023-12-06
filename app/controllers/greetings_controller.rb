class GreetingsController < ApplicationController
  def index
    render json: { greeting: Greeting.all.sample.display_text }
  end
end
