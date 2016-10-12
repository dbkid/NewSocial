class Api::TopicTagsController < ApplicationController

  def create
  end

  def destroy
  end

  private

  def topic_tag_params
    params.require(:topic_tag).permit(:story_id, :topic_title, :topic_id)
  end

end
