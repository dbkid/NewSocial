class AddColumnsToTopicTags < ActiveRecord::Migration
  def change
    add_column :topic_tags, :topic_id, :integer
    add_column :topic_tags, :story_id, :integer 
  end
end
