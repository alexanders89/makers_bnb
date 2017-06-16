feature 'User Signup' do
  scenario 'allows a new user to sign up' do
    User.create(email: 'test@email.com', password: '123456')
    visit('/')
    fill_in('email', with: 'test@email.com')
    fill_in('password', with: '123456')
    click_button('Sign Up')
    expect(page).to have_content('Thanks for signing up!')
  end
end
