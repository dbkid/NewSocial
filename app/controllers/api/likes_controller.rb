class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      @story = @like.story
      @responses = @story.responses
      render "api/stories/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:story_id, :user_id)
  end

end
