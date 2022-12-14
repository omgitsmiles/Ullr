class Match < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: "User"
  validates :user_id, presence: true
  validates :friend_id, presence: true
  validates :friend_id, uniqueness: { scope: :user_id, message: "Athelete already your friend!" }
end
