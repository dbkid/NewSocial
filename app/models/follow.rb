class Follow < ActiveRecord::Base

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "User"

  belongs_to :followed,
    primary_key: :id,
    foreign_key: :followed_id,
    class_name: "User"


  def new
  end

end
