class Topic < ActiveRecord::Base

  has_many :topic_tags,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: "TopicTag"

  has_many :topic_follows,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: "TopicFollow"

  has_many :stories,
    through: :topic_tags,
    source: :story 

end
