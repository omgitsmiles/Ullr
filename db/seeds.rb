User.destroy_all
Activity.destroy_all
Gear.destroy_all

puts "seeding test user..."
User.create(username: "test", password_digest: "tester", location: "NYC")

puts "seeded!"