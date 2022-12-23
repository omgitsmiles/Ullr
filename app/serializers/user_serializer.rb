class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :picture, :location
  has_many :activities
  has_many :gears
end
