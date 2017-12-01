User.destroy_all


bob = User.create!(
    email: 'test2@test.com',
    password: '123123123',
    password_confirmation: '123123123'
)
demo = User.create!(
    email: 'demo@demo.com',
    password: '123123123',
    password_confirmation: '123123123'
)