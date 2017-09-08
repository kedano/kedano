import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		// Support for slugs.
		return this.store.query('post', {
			filter: {name: params.slug}
		}).then(models => models.get('firstObject'));

		// If you don't need slugs, do this instead.
		// return this.store.findRecord('post', params.id);
	},
	renderTemplate: function() {
		this.render('posts.post', {
			// Render the UsersView into the outlet found in application.hbs
			into: 'application'
		});
	}



	//postHasChanged: function() {
	//    if (this.get('state') === 'inDOM') {
	//        $('pre code').each(function(i, e) {
	//            hljs.highlightBlock(e)
	//        });
	//    }
	//}.observes('controller.model')


});
