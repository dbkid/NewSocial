class Api::TopicsController < ApplicationController

  def create
  end

  def destroy
  end

  def show
    @topic = Topic.find(params[:id].to_i)
    @stories = @topic.stories
    render "api/stories/index"
  end

  private

  def topic_params
  end

end
