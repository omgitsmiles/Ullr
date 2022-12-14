class PostSerializer < ActiveModel::Serializer
  attributes :id, :post, :upvote
  has_one :user
  has_one :group
end
