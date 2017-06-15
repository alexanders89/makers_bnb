require './app/models/user'

describe User do

 let!(:user) do User.create(firstName: 'Harold',
                userName: 'daddybear',
                email: 'harold@thebear.com',
                password: 'haroldisme')
  end

 it 'authenticates when given a valid username and password' do
    authenticated_user = User.authenticate(user.userName, user.password)
    expect(authenticated_user).to eq user
  end

 it 'does not authenticate when given an incorrect password' do
    expect(User.authenticate(user.userName, 'wrong_stupid_password')).to be_nil
  end

end
