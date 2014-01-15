Ember Update Chart
===========

This is a small example of how to auto-update a [d3.js](https://github.com/mbostock/d3/wiki/Gallery) barchart within your Ember.js app.

To do:

- Utilize arrayComputed to manage changes to the data array.

- Provide more chart examples (Line, Pie, Donut, etc.)


###Key points
=======
Utilizing Ember's data bindings and observers makes auto-updating a D3.js rendered chart, realtively easy.  

In your Ember Component, declare three functions:

-1. A function to wrap your d3.js javascript:

		'draw: function(){
			var data = this.get('componentData);
			//your d3 code here
		}'

-2. A function to execute the d3.js code:

	
		`didInsertElement: function(){
			this.draw();
		}'

-3. And a function to observe changes on your model, then rerender your component when those changes occur.

		'dataDidChange: function(){
			this.rerender();
		}.observes('this.componentData')
		
		
Then in your template, simply assign the `componentData` to a data array declared within your `Ember.ArrayController`, and you're set.

		`<script type="text/x-handlebars" id="index">
			{{your-component componentData=controllerData}}
		</script>


##Contact
=====
Feel free to make a pull request if you have any additional ideas on how to improve this code.

Thanks!

Twitter: @malchak

