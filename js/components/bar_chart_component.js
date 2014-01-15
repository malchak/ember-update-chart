App.BarChartComponent = Ember.Component.extend({
  drawChart: function(){
  	var data = this.get('componentData');
		var margin = {top: 20, right: 20, bottom: 30, left: 40};
		var w = 500 - margin.left - margin.right;
		var h = 250 - margin.top - margin.bottom;
		var barPadding = 4;
		
		var tip = d3.tip()
		  					.attr('class', 'd3-tip')
		  					.offset([-5, 0])
		  					.html(function(d) { 
		  						return "<span>Value:</span> <span style='color:red'>$" + d.bar + "</span>";
		  					});
		
		var y = d3.scale.linear()
		    						.range([h, 0]);
		
		var yAxis = d3.svg.axis()
		    							.scale(y)
		    							.orient("left")
		    							.ticks(5);
		
		var svg = d3.select("#"+this.get('elementId'))
								.append("svg")
									.attr("width", w + margin.left + margin.right)
									.attr("height", h + margin.top + margin.bottom)
									.call(tip)
								.append("g")
		    					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		y.domain([0, d3.max(data, function(d) { return d.bar; })]);

		svg.append("g")
		      .attr("class", "y axis")
		      .call(yAxis)
		   

		svg.selectAll("rect")
		  	.data(data)
		  	.enter()
		  	.append("rect")
		  		.attr("class", "bar")
		  		.attr("x", function(d, i){return i * (w / data.length);})
		  		.attr("width", w / data.length - barPadding)
		  		.attr("y", function(d) { return y(d.bar); })
		  		.attr("height", function(d) { return h - y(d.bar); })
		  		.attr("fill", function(d){
		  			return "rgb(" + (d.bar * 2) + "," + (d.bar * 7) + "," + (d.bar * 9) + ")";
		  		})
		  		.on('mouseover', tip.show)
		  		.on('mouseout', tip.hide)
  },
  
  didInsertElement: function(){
  	this.drawChart();
  },
  
  dataDidChange: function(){
  	this.rerender();
  }.observes('this.componentData')

});