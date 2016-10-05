class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
		if @user.save
			login(@user)
			render "api/users/user"
		else
			render json: @user.errors.full_messages, status: 422
		end
  end

  def destroy
    @user = User.find(user_params[:id].to_i)
    if @user
      logout
      @user.delete
      render json: ["user deleted"]
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :name, :email, :password)
  end


end
