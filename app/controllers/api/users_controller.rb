class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
		if @user.save
			login(@user)
			render "api/users/current_user"
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

  def show
    @user = User.find(params[:id].to_i)
    @stories = @user.stories
    render "api/users/show"
  end

  def update
    @user = User.find(params[:id].to_i)
    @stories = @user.stories
    if @user.update(user_params)
      render "api/users/current_user"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :name, :email, :password, :image)
  end


end
