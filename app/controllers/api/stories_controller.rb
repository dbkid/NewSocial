class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all
    render "api/stories/index"
  end

  def show
    @story = Story.find(params[:id].to_i)
    @responses = @story.responses
    @liked = false
    if logged_in?
      if (current_user.likes.find_by(story_id: @story.id))
        @liked = true
      end
    end
    render "api/stories/show"
  end

  def create
    @story = Story.new(story_params)
    @responses = @story.responses
    if @story.save
      render "api/stories/show"
    else
      render(
        json: ["Failed to create story"],
        status: 401
      )
    end
  end

  def story_params
    params.require(:story).permit(:title, :content, :author_id)
  end

end
