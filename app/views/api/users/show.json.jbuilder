json.partialStories @stories do |story|
  json.id story.id
  json.author do
    json.id story.author.id
    json.name story.author.name
    json.imageUrl asset_path(story.author.image.url(:original))
  end
  json.title story.title
  json.splice story.splice
  json.date story.date

end

json.author do
  json.name @user.name
  json.id @user.id
  json.imageUrl asset_path(@user.image.url(:original))
end
