class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all
    render "api/stories/index"
  end

  def show
    @story = Story.find(params[:story][:story_id])
    @responses = @story.responses
    @liked = false
    @bookmarked = false
    @topics = @story.topics
    if logged_in?
      if (current_user.likes.find_by(story_id: @story.id))
        @liked = true
      end
      if (current_user.bookmarks.find_by(story_id: @story.id))
        @bookmarked = true
      end
    end
    render "api/stories/show"
  end



  def create
    @story = Story.new(title: params[:story][:title], content: params[:story][:content], author_id: params[:story][:author_id])
    @responses = @story.responses
    @liked = false
    @bookmarked = false
    @topics = []
    if @story.save
      unless params[:story][:topic_titles].nil?
        params[:story][:topic_titles].each do |topic_title|
          if Topic.find_by(title: topic_title).nil?
            topic = Topic.create(title: topic_title)
          else
            topic = Topic.find_by(title: topic_title)
          end
          topic_id = topic.id
          TopicTag.create(topic_id: topic_id, story_id: @story.id)
        end

        @topics = @story.topics
      end
      render "api/stories/show"
    else
      render(
        json: ["Failed to create story"],
        status: 401
      )
    end
  end

  private

  def story_params
    params.require(:story).permit(:title, :content, :author_id, :topic_titles, :story_id)
  end



end
