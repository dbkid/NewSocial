class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:name],
      params[:user][:email],
      params[:user][:password]
      )

    if @user
      login(@user)
      render "api/users/user"
    else
      render(
        json: ["Invalid username/password combination"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: ["logged out"]
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end

end
