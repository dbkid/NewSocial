class Api::TopicsController < ApplicationController

  def index
    @random_topics = Topic.limit(4)
    @followed_topics = current_user.topics
    render "api/topics/index"
  end

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
