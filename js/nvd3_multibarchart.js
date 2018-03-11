    //var test_data = stream_layers(3,128,.1).map(function(data, i) {
    var test_data = stream_layers(3,20,.1).map(function(data, i) {
        return {
            key: (i == 1) ? 'Non-stackable Stream' + i: 'Stream' + i,
            nonStackable: (i == 1),
            values: data
        };
    });
    nv.addGraph({
        generate: function() {
            var width = nv.utils.windowSize().width,
                height = nv.utils.windowSize().height;

			
            var chart = nv.models.multiBarChart()
                .width(900)
                .height(400)
                .stacked(true)
                ;

            chart.dispatch.on('renderEnd', function(){
                console.log('Render Complete');
            });

            var svg = d3.select('#skalierender-svg-container svg').datum(test_data);
            console.log('calling chart');
            svg.transition().duration(0).call(chart);

            return chart;
        },
        callback: function(graph) {
            nv.utils.windowResize(function() {
                var width = nv.utils.windowSize().width;
                var height = nv.utils.windowSize().height;
                graph.width(width).height(height);

                d3.select('#skalierender-svg-container svg')
                    .attr('width', width)
                    .attr('height', height)
                    .transition().duration(0)
                    .call(graph);

            });
        }
    });