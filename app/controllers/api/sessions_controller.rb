class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
      )

    if @user
      login(@user)
      @topics = @user.topics
      render "api/users/current_user.json.jbuilder"
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
      render "api/users/current_user"
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end

end
