import { helloWorld } from '../../src/hello-world'

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

describe('helloWorld', () => {
  test('should say hello to you!', () => {
    const name = 'misha'
    helloWorld(name)
    expect(consoleLogSpy).toBeCalledWith(`hello, ${name}`)
  })
})
