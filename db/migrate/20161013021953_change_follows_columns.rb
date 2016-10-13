class ChangeFollowsColumns < ActiveRecord::Migration
  def change
   rename_column :follows, :follower, :follower_id
   rename_column :follows, :followed, :followed_id
  end
end
