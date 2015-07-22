class UserController < ApplicationController

  def index
    @users = User.all
    @users_convert = Array.new
    @users.each do |user|
      @users_convert.push :login => user['login'], :email => user['email']
    end

    render json: @users_convert.to_json
  end

  def create
  end



end
