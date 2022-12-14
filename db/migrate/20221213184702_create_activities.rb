class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :sport
      t.integer :distance
      t.integer :elapsed_time
      t.integer :upvotes
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :gear, null: false, foreign_key: true

      t.timestamps
    end
  end
end
