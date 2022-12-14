class CreateGears < ActiveRecord::Migration[6.1]
  def change
    create_table :gears do |t|
      t.string :shoes
      t.string :bike
      t.string :picture

      t.timestamps
    end
  end
end
