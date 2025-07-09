module.exports = {
  stackbitVersion: '~0.3.0',
  contentSources: [
    {
      type: 'filesystem',
      name: 'content',
      path: '.',
    }
  ],
  models: {
    page: {
      type: 'page',
      urlPath: '/{slug}',
      fields: []
    }
  }
};
