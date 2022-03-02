module.exports = {
  displayName: 'travelit-admin-dash-svelte',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^(.+\\.svelte$)': [
      'svelte-jester',
      {
        preprocess: 'apps/travelit-admin-dash-svelte/svelte.config.cjs',
      },
    ],
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['svelte', 'ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/travelit-admin-dash-svelte',
};
