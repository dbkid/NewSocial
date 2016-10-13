
json.name @user.name
json.id @user.id
json.imageUrl asset_path(@user.image.url(:original))
json.sesssionToken @user.session_token


json.followedTopics @user.topics do |topic|
  json.id topic.id
  json.title topic.title
end

json.followedUsers @user.follows do |follow|
  json.id follow.id
  json.name follow.name
end 
