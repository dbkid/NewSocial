class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all
    render "api/stories/index"
  end

  def show
    @story = Story.find(params[:id].to_i)
    render "api/stories/show"
  end

end
