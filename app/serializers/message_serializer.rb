class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :friend_id
  has_one :user
  has_one :friend
end
