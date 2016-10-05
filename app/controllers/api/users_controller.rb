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
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end


end
