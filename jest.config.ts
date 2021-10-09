import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	preset: 'ts-jest',
	testEnvironment: 'node',
};

export default config;
