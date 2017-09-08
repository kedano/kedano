import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page', {path: '/'});
  this.route('page', {path: ':slug'});
  this.route('posts', {path: '/journal'}, function() {
    this.route('post', {path: '/:slug'});
  });
});

export default Router;
