json.randomTopics @random_topics do |topic|
  json.id topic.id
  json.title topic.title
end

json.followedTopics @followed_topics do |topic|
  json.id topic.id
  json.title topic.title
end
