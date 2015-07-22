class HomeController < ApplicationController

  #główna akcja opis / logowanie / rejestracja
  def index
    render layout: 'home'
  end

  def embed
    @id = params[:id]
    render layout: false
  end

end
