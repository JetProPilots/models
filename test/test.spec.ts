import User from '../src/models/User'

const main = async () => {
  const users = await User.find()
}
