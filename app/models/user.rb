class User < ApplicationRecord
    has_secure_password
    has_many :activities
    has_many :messages
    has_many :matches
    has_many :friends, through: :matches
    has_many :gears, through: :activities
    has_many :posts
    has_many :groups, through: :posts
end
