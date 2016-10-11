  json.id @story.id
  json.author @story.author
  json.title @story.title
  json.content @story.content
  json.responses @responses do |response|
    json.id response.id
    json.content response.content
    json.author do
      json.id response.author.id
      json.name response.author.name
      json.imageUrl asset_path(response.author.image.url(:original))
    end
    json.date response.created_at.strftime("%b %d")
  end
  json.date @story.created_at.strftime("%b %d")
  json.likeCount @story.likes.count
