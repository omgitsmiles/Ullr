class AddPictureAndLocationToActivity < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :picture, :string
    add_column :activities, :location, :string
  end
end
