class User < ApplicationRecord
    has_secure_password
    has_many :activities
    has_many :gears, through: :activities
    has_many :posts
    has_many :groups, through: :posts
end
