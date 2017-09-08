/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'kedano',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        
      }
    },
    contentSecurityPolicy: {
      // ... other stuff here
      'connect-src': "'self' http://localhost:4200 http://wp.keda.no http://kedano.surge.sh http://wp.keda.no/wp-json/wp/v2/posts"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    wordpressHost: 'http://wp.keda.no'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.wordpressHost = 'http://wp.keda.no'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    ENV.wordpressHost = 'http://wp.keda.no'
  }

  return ENV;
};
