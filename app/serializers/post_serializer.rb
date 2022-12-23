class PostSerializer < ActiveModel::Serializer
  attributes :id, :post, :upvote, :group_id, :username, :user_pic
end
