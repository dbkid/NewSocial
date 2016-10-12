class TopicTag < ActiveRecord::Base

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: "Topic"

  belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: "Story"

end
