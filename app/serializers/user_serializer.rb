class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :picture, :location
end
