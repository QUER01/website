  // create sample dataset
						  var sample_data = [
							{"name": "R", "size": 10},
							{"name": "Python", "size": 12},
							{"name": "D3", "size": 30},
							{"name": "D3Plus", "size": 26},
							{"name": "Hadoop", "size": 12},
							{"name": "Shiny", "size": 26},
							{"name": "Kafka", "size": 11},
							{"name": "Spark", "size": 24}
						  ]
						  // create list of node positions
						  var positions = [
							{"name": "R", "x": 10, "y": 15},
							{"name": "Python", "x": 12, "y": 24},
							{"name": "D3", "x": 16, "y": 18},
							{"name": "D3Plus", "x": 26, "y": 21},
							{"name": "Hadoop", "x": 13, "y": 4},
							{"name": "Shiny", "x": 31, "y": 13},
							{"name": "Kafka", "x": 19, "y": 8},
							{"name": "Spark", "x": 24, "y": 11}
						  ]
						  // create list of node connections
						  var connections = [
							{"source": "R", "target": "Shiny"},
							{"source": "D3", "target": "D3Plus"},
							{"source": "Hadoop", "target": "Spark"},
							{"source": "R", "target": "Spark"},
							{"source": "Python", "target": "Spark"}
							
						  ]
						  // instantiate d3plus
                         var defaults = {
                              "width": 900,
                              "height": 360,
                              "resize": true
                            }
                                                                  
						  var visualization = d3plus.viz()
							.container("#viz")  // container DIV to hold the visualization
                            .config(defaults)
							.type("network")    // visualization type
							.data(sample_data)  // sample dataset to attach to nodes
							.nodes(positions)   // x and y position of nodes
							.edges(connections) // list of node connections
							.size("size")       // key to size the nodes
							.id("name")         // key for which our data is unique on
							.background("#fafaf9")
							.draw()             // finally, draw the visualization!