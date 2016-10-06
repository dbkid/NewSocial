class AuthorId < ActiveRecord::Migration
  def change
    rename_column :stories, :user_id, :author_id
  end
end
