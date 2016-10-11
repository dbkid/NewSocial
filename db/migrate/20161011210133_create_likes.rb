class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :story_id
      t.integer :user_id
    end
  end
end
