class HomeController < ApplicationController

  before_action :check_login, only:[:index]
  layout 'home'

  #główna akcja opis / logowanie / rejestracja
  def index
  end

  #wyświetlenie projektu embed / iframe
  def embed
    @id = params[:id]
    render layout: false
  end

  def check_login
    if session[:logged]
      redirect_to url_for( :controller => 'admin',:action => 'index' )
    end
  end

end
