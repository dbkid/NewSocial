class Api::ResponsesController < ApplicationController

  def create
    @response = Response.new(response_params)
    if @response.save
      @story = Story.find(@response.story_id)
      @responses = @story.responses
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
