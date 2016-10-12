class TopicFollow < ActiveRecord::Base

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: "Topic"

end
