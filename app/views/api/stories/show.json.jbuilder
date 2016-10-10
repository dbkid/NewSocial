  json.id @story.id
  json.author @story.author
  json.title @story.title
  json.content @story.content
  json.responses @responses do |response|
    json.id response.id
    json.content response.content
    json.author response.author
  end
  json.date @story.created_at.strftime("%b %d")
