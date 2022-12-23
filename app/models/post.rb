class Post < ApplicationRecord
  belongs_to :user
  belongs_to :group

  def username 
    self.user.username
  end
  
  def user_pic
    self.user.picture
  end
end
