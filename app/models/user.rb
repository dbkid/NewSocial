class User < ActiveRecord::Base

  attr_reader :password

  validates :name, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :stories,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Story"

  has_many :responses,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Response"

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Like"

  has_many :bookmarks,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Bookmark"

  has_many :topic_follows,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "TopicFollow"

  has_many :topics,
    through: :topic_follows,
    source: :topic


  has_attached_file :image, default_url: "default-avatar.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.password?(password) ? user : nil
  end

  def password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.base64
  end

end
