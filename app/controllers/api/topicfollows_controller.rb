class Api::TopicfollowsController < ApplicationController

  def create
    user_id = current_user.id
    @topic_follow = TopicFollow.new(topic_id: params[:topic_follow][:topic_id], user_id: user_id)
    if @topic_follow.save
      @topic = @topic_follow.topic
      render "api/topic_follows/show.json.jbuilder"
    else
      render json: @topic_follow.errors.full_messages, status: 422
    end 
  end

  def destroy
  end

  def topic_follow_params
    params.require(:topic_follow).permit(:topic_id)
  end

end
