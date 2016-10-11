class Story < ActiveRecord::Base

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  has_many :responses,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: "Response"

  has_many :likes,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: "Like"

  attr_accessor :splice
  after_initialize :generate_splice

  def new
    @splice = ""
  end


  def generate_splice
    sentence_array = self.content.split(".")
    @splice = sentence_array[0..1]
  end


end
