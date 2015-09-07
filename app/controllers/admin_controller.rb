class AdminController < ApplicationController

  before_action :require_login
  layout 'admin'
  #główna akcja opis / logowanie / rejestracja
  def index
    render layout: 'admin'
  end

  def embed
    @id = params[:id]
    render layout: false
  end

  def edit
    render layout: 'home'
  end

  def logout
    session.clear
    redirect_to url_for( :controller => 'home', :action => 'index' )
  end

  private
    def require_login
      if !session[:logged]
        redirect_to url_for( :controller => 'home',:action => 'index' )
      end
    end

end
