class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all
    render "api/stories/index"
  end

  def show
    @story = Story.find(params[:id].to_i)
    render "api/stories/show"
  end

  def create
    @story = Story.new(story_params)
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
