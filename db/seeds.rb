User.destroy_all
Activity.destroy_all
Gear.destroy_all

puts "seeding test user..."
User.create(username: "omgitsmiles", password_digest: "phase5", location: "NYC", picture: "https://avatars.githubusercontent.com/u/91231062?v=4")

puts "seeded!"