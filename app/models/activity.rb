class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :gear
  validates :sport, presence: true
  validates :distance, presence: true
  validates :elapsed_time, presence: true

  def users_gear
   if self.gear.shoes
      return self.gear.shoes
   elsif self.gear.bike
      return self.gear.bike
   end
  end

end
