class Story < ActiveRecord::Base

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  attr_accessor :splice, :date
  after_initialize :generate_splice, :format_date

  def new
    @splice = ""
    @date = self.updated_at
  end


  def generate_splice
    sentence_array = self.content.split(".")
    @splice = sentence_array[0..1]
  end

  def format_date
    @date = @date.strftime("%b %d") unless @date.nil?
  end




end
