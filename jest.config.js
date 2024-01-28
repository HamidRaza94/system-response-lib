const packageJson = require('./package.json');
/** @type {import('jest').Config} */

const config = {
	preset: 'ts-jest',
  testEnvironment: 'node',
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	displayName: {
		name: packageJson.name,
		color: 'green',
	}
};

module.exports = config;
