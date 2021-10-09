import { helloWorld } from '../../src/hello-world';

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

describe('helloWorld', () => {
	test('should say hello to you!', () => {
		helloWorld('misha');
		expect(consoleLogSpy).toBeCalledWith('hello, misha');
	});
});
