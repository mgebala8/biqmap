class UserController < ApplicationController

  #wyświetlenie pełnej listy użytkowników
  def index
    @users = User.all
    @users_convert = Array.new
    @users.each do |user|
      @users_convert.push :login => user['login'], :email => user['email']
    end

    render json: @users_convert.to_json
  end

  #akcja odpowiedzialna za stworzenie uzytkownika
  def create
    user = User.new( params.permit(:login,:email,:password) )
    if user.save

      render json: {action: true}

    else

      render json: {action: false,errors: user.errors.full_messages}

    end

  end

  #akcja odpowiedzialna za zalogowanie użytkownika
  def login

    @user = User.where("login = ? OR email = ?", params[:login], params[:login]).first

    if @user
      if @user.authenticate params[:password]
        errors = false
        message = 'logujemy uzytkownika'
        session[:logged] = true
        session[:user] = @user
      else
        errors = true
        message = 'uzytkownik istnieje, błędne hasło'
      end
    else
      errors = true;
      message = 'uzytkownik nie istnieje'
    end

    render json: {errors: errors, message: message }
  end

end
