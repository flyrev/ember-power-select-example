import Ember from 'ember';

export default Ember.Controller.extend({
    ajax: Ember.inject.service(),

    actions: {
	searchUser(term) {
	    console.log(term);
	    let url = `https://api.github.com/search/repositories?q=${term}`;
	    return this.get('ajax').request(url).then((json) => json.items);
	}
    }
});
