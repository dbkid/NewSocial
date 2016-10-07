json.partialStories @stories do |story|
  json.id story.id
  json.author do
    json.id story.author.id
    json.name story.author.name
  end
  json.title story.title
  json.splice story.splice
  json.created_at story.created_at

end

json.author do
  json.name @user.name
  json.id @user.id
end
