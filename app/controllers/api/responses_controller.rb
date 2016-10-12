class Api::ResponsesController < ApplicationController

  def create
    @response = Response.new(response_params)
    if @response.save
      @story = Story.find(@response.story_id)
      @responses = @story.responses
      if logged_in?
        if (current_user.likes.find_by(story_id: @story.id))
          @liked = true
        end
        if (current_user.bookmarks.find_by(story_id: @story.id))
          @bookmarked = true
        end
      end
      render "api/stories/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def response_params
    params.require(:response).permit(:id, :content, :author_id, :story_id)
  end


end
