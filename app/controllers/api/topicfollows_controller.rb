class Api::TopicfollowsController < ApplicationController

  def index
    user = current_user
    if current_user
      @followed_topics = user.topics
    end
    render "api/topic_follows/index.json.jbuilder"
  end

  def create
    user_id = current_user.id
    @topic = Topic.find(params[:topic_follow][:topic_id])
    @followed_topics = current_user.topics
    if @followed_topics.include?(@topic) == false
        @topic_follow = TopicFollow.new(topic_id: params[:topic_follow][:topic_id], user_id: user_id)
        if @topic_follow.save
          render "api/topic_follows/index.json.jbuilder"
        else
          render json: @topic_follow.errors.full_messages, status: 422
        end
    else
      render json: ["already following topic"]
    end
  end

  def destroy
    user_id = current_user.id
    topic_id = params[:id]
    topic_follow = TopicFollow.find_by(topic_id: topic_id, user_id: user_id)
    if topic_follow.delete
      @followed_topics = current_user.topics
      render "api/topic_follows/index.json.jbuilder"
    else
      render render json: @topic_follow.errors.full_messages, status: 422
    end
  end

  def topic_follow_params
    params.require(:topic_follow).permit(:topic_id)
  end

end
