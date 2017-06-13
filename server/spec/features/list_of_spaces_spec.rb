feature 'see a list of spaces on a homepage' do
  scenario 'User sees a list of spaces' do
    Space.create(name: 'Bobs pad')
    visit '/spaces'
    expect(page.status_code).to eq 200
    expect(page).to have_content 'Bobs pad'
  end

end
