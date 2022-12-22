class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :sport, :distance, :elapsed_time, :picture, :location, :created_at, :upvotes, :users_gear
  has_one :user
end
