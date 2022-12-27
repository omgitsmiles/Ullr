class Group < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :users, through: :posts
    validates :name, presence: true, uniqueness: true
end
