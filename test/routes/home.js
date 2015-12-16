const test = require('../test')

test('home', (t) => {
  t.agent.get('/').expect(200).end(t.end)
})
