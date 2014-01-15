App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
  // put your routes here
});

App.Foo = DS.Model.extend({
	bar: DS.attr('number')
});

App.Foo.FIXTURES = [
	{
		id: 1,
		bar: 10
	},
	{
		id: 2,
		bar: 12
	},
	{
		id: 3,
		bar: 14
	}
];

App.ApplicationRoute = Ember.Route.extend({
  model: function(){
  	return this.store.find('foo');
  }
});

App.ApplicationController = Ember.ArrayController.extend({
	actions: {
		save: function(){
			var bar = this.get('bar');
			if( !bar.trim() ){
				return;
			}
			var foo = this.store.createRecord('foo', {
				bar: parseInt(bar)
			});
			foo.save();
			this.set('bar', '');
		},
		cancel: function(){
			this.set('bar', '');
		}
	},

	barChartData: function(){
		var data = this.map(function(foo){
			return foo.getProperties('bar');
		});
		console.log(data);
		return data
	}.property('@each')
});








