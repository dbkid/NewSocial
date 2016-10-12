class Api::TopictagsController < ApplicationController

  def create

    params[:topic_tag][:topic_titles].each do |topic_title|
      if Topic.find_by(title: topic_title).nil?
        topic = Topic.create(title: topic_title)
      else
        topic = Topic.find_by(title: topic_title)
      end

      topic_id = topic.id
      TopicTag.create(topic_id: topic_id, story_id: params[:topic_tag][:story_id])
    end

    story = Story.find(params[:topic_tag][:story_id])
    @topics = story.topics

    render "api/topic_tags/show"

  end

  def destroy
  end

  private

  def topic_tag_params
    params.require(:topic_tag).permit(:story_id, :topic_titles, :topic_id)
  end

end
