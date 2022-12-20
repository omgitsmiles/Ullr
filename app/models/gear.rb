class Gear < ApplicationRecord
    has_many :activities
    has_many :users, through: :activities

    def mileage
        self.activities
    end
end
