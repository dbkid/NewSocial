class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save

      @user = User.find(params[:follow][:follower_id])
      render "api/users/current_user"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def show
  end

  def destroy
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end


end
