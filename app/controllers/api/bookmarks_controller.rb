class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(bookmark_params)
    if @bookmark.save
      @story = @bookmark.story
      @responses = @story.responses
      @bookmarked = true
      @topics = @story.topics
      if logged_in?
        if (current_user.likes.find_by(story_id: @story.id))
          @liked = true
        end
      end
      render "api/stories/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    user = current_user
    @stories = user.bookmarked_stories
    render "api/stories/index"
  end

  def destroy
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:story_id, :user_id)
  end

end
