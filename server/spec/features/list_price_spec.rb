feature 'see the price of spaces' do
  scenario 'User sees a price within space list' do
    Space.create(name: "Bobs", description: "House", price: 100.00)
    visit '/spaces'
    expect(page.status_code).to eq 200
    expect(page).to have_content 100.00
  end
end
