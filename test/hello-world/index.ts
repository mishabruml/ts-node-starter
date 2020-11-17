import { helloWorld } from '../../src/hello-world'
import { partial } from '../helpers'

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

describe('helloWorld', () => {
  test('should say hello to you!', () => {
    const name = partial<string>('misha')
    helloWorld(name)
    expect(consoleLogSpy).toBeCalledWith(`hello, ${name}`)
  })
})
