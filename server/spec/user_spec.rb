require './app/models/user'

describe User do

 let!(:user) do
  end

 it 'allows a user to be created' do
   User.create(firstName: 'Harold',
               userName: 'daddybear',
               email: 'harold@thebear.com',
               password: 'haroldisme')
   user = User.last(userName: 'daddybear')
   expect(user.email).to eq('harold@thebear.com')
  end
end
