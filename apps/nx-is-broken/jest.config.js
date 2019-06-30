module.exports = {
  name: 'nx-is-broken',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-is-broken',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
