class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.text :title
    end

    add_index :topics, :title, unique: true
  end



end
