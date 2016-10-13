class Api::TopicsController < ApplicationController

  def create
  end

  def destroy
  end

  def show
    @topic = Topic.find(params[:id].to_i)
    @stories = @topic.stories
    render "api/topics/show"
  end

  private

  def topic_params
  end

end
