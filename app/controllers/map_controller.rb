class MapController < ApplicationController

  layout false
  #before_action :require_login

  #wyświetlenie wszystkich plików excela
  def index
    map_list = Map.select(:id,:name).where( "user_id = ?", session[:user]['id'] )
    render json: map_list.to_json
  end

  #funkcja wyświetlająca konkretną mapę
  def show
    map_list = Map.select(:id,:name,:map_json).where( "user_id = ? AND id = ?", session[:user]['id'], params['id']).first
    render json: map_list.to_json
  end

  #tworzenie nowego pliku excela
  def create
    map = Map.new;
    map.user_id = session[:user]['id']
    map.name = params['name']
    map.map_json = params['map_json']

    if map.save
      render json: {save: true, message: 'zapisano poprawnie mapę', callback: 'map'}
    else
      render json: {save: false, message: 'błąd podczas zapisu mapy', callback: 'map'}
    end
  end

  #funkcja aktualizująca konkretny rekord w bazie danych
  def update
    map = Map.where( "user_id = ? AND id = ?", session[:user]['id'], params['id']).first
    map.name = params['name']
    map.map_json = params['map_json']

    if map.save
      render json: {save: true, message: 'zaktualizowano poprawnie mapę', callback: 'map'}
    else
      render json: {save: false, message: 'błąd podczas aktualizacji mapy', callback: 'map'}
    end
  end

  #usuwanie wybranej mapy
  def destroy
    map = Map.where( "id = ? AND user_id = ?", params['id'], session[:user]['id'] ).first

    if map.destroy
      render json: {save: true, message: 'usunięto wybraną mapę', callback: 'map'}
    else
      render json: {save: false, message: 'błąd podczas usuwania wybranej mapy', callback: 'map'}
    end

  end

  #funkcja sprawdzająca czy użytkownik jest zalogowany
  private
    def require_login
      if !session[:logged]
        render json: "brak dostępu do zasobu - nie jesteś zalogowany"
      end
    end

end
