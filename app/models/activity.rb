class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :gear

  def users_gear
   if self.gear.shoes
      return self.gear.shoes
   elsif self.gear.bike
      return self.gear.bike
   end
  end

end
