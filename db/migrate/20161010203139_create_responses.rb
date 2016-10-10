class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.text :content
      t.integer :author_id
      t.integer :story_id
      t.timestamps
    end
  end
end
