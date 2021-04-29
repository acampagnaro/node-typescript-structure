import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Alexandre'

  expect(user.name).toEqual('Alexandre')
})
