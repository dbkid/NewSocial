class CreateTopicFollows < ActiveRecord::Migration
  def change
    create_table :topic_follows do |t|
      t.integer :topic_id
      t.integer :user_id
    end
  end
end
