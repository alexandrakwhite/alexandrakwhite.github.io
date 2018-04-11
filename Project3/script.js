//BAR
Plotly.d3.csv('data/ATTSBreedStats.csv', function(err, rows){

  var unpack = function(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  //change colors according to percentages
  var colors = [];
  var pitbullTerrier = unpack(rows, 'Breed');

for (var i = 0; i < pitbullTerrier.length; i++) {
  if (pitbullTerrier[i] == 'American Pit Bull Terrier') {
   colors.push('#ff0000')
  } else {
   colors.push('#0000ff')
  }

}

  var breeds = {
    y: unpack(rows, 'Percent'),
    x: unpack(rows, 'Breed'),
    type: 'bar', // the type of plot you're producing. Scatter is used to plot points with x and y values
    text: unpack(rows, 'Breed'), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: ' Breed' //If legend was on, this would be the name
  };

  // Create the data object as an array of our data series objects:
  var data = [breeds];

  // The layout object provides options for how our visualization will appear:
  var layout = {
    title:'ATTS Test Results',
    showlegend: false,
    hovermode: true, // if false, disables the hover text for the entire plot
    yaxis: {
     title: 'Success Rate'
   },
    color: colors
  }

  var options = {
   displayModeBar: false, // disable zoom, save and other toolbar options.
  }

  Plotly.newPlot('viz', data, layout, options);

});



//OUTCOME SCATTERPLOT

Plotly.d3.csv('data/outcomes.csv', function(err, rows){

  var unpack = function(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }


  var colors = [];

  var outcomes = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'monthyear'),
    y: unpack(rows, 'age_upon_outcome'),
    type: 'scatter', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    marker: {
      color: colors,
    },
    text: unpack(rows, 'name') // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
  };


  // Create the data object as an array of our data series objects:
  var data = [outcomes];

  // The layout object provides options for how our visualization will appear:
  var layout = {
    title:'Pit Bull Mix Adoptions',
    showlegend: false,
    hovermode: true, // if false, disables the hover text for the entire plot
    xaxis: {
     title: 'Year Adopted'
    },
    yaxis: {
     title: 'Age'
    }
  }

  var options = {
   displayModeBar: false, // disable zoom, save and other toolbar options.
  }

  Plotly.newPlot('scatterviz', data, layout, options);

})



// ISSA MAAAAAAAAAAAAAP

Plotly.d3.csv('data/AAC_intake_reduced.csv', function(err, rows){

      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var data = [{
          type: 'scattermapbox',
          lat: unpack(rows, 'Latitude'),
          lon: unpack(rows, 'Longitude'),
          text: unpack(rows,'FoundLocation'),
      }];



      var layout = {
       title: 'Pitbull Hot Spots',
       font: {
         color: '#222'
       },
        dragmode: 'zoom',
        mapbox: {
          center: { // Sets the center of the map.
            lat: 30.2672,
            lon: -97.7431
          },
          zoom: 10, // Sets the zoom level.
          style: 'light' // These are mapbox styles. Options include light, dark, satellite
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0
        },
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#ffffff',
        showlegend: false
      };

      Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiYWxleGFuZHJhd2hpdGUiLCJhIjoiY2pmbHVxdmVhMHMyZjJ4bGk1eHdidDVjMCJ9.Bm90pkulu8KqsBfgDBO7lA' // Get your own Mapbox access token by registering at mapbox.com
      });

      Plotly.plot('mapviz', data, layout);
});
