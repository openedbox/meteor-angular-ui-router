Package.describe({
  summary: "angular-ui-router, the de-facto solution to flexible routing with nested views.",
  version: "0.5.0",
  git: "https://github.com/Urigo/meteor-angular-ui-router.git"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('tinytest');

  api.use('mquandalle:bower@0.1.11', 'client');
  api.use('templating', 'client');

  api.export('UiRouter', 'client');

  api.use('urigo:angular@0.4.0', 'client');

  // Install bower components.
  api.addFiles('smart.json', 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('urigo:angular-ui-router-tests.js');
});
