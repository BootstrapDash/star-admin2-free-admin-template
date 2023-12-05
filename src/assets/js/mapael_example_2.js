$(function() {
  'use strict';
  if ($(".mapael-example-2").length) {
    $(".mapael-example-2").mapael({
      map: {
        name: "france_departments"
        // Enable zoom on the map
        , zoom: {
            enabled: false,
            maxLevel: 10
        }
        // Set default plots and areas style
        , defaultPlot: {
            attrs: {
                fill: "#004a9b"
                , opacity: 0.6
            }
            , attrsHover: {
                opacity: 1
            }
            , text: {
                attrs: {
                    fill: "#505444"
                }
                , attrsHover: {
                    fill: "#000"
                }
            }
        }
        , defaultArea: {
            attrs: {
                fill: "#f4f4e8"
                , stroke: "#ced8d0"
            }
            , attrsHover: {
                fill: "#a4e100"
            }
            , text: {
                attrs: {
                    fill: "#505444"
                }
                , attrsHover: {
                    fill: "#000"
                }
            }
        }
    },

    legend: {
      plot: [
          {
              labelAttrs: {
                  fill: "#4a4a4a"
              },
              titleAttrs: {
                  fill: "#4a4a4a"
              },
              cssClass: 'population',
              mode: 'horizontal',
              title: "Population",
              marginBottomTitle: 5,
              slices: [{
                  size: 15,
                  legendSpecificAttrs: {
                      fill: '#094a9b',
                      stroke: '#f4f4e8',
                      "stroke-width": 2
                  },
                  label: "< 10",
                  max: "10000"
              }, {
                  size: 22,
                  legendSpecificAttrs: {
                      fill: '#094a9b',
                      stroke: '#f4f4e8',
                      "stroke-width": 2
                  },
                  label: "> 10 and < 100",
                  min: "10000",
                  max: "100000"
              }, {
                  size: 30,
                  legendSpecificAttrs: {
                      fill: '#094a9b',
                      stroke: '#f4f4e8',
                      "stroke-width": 2
                  },
                  label: "> 100",
                  min: "100000"
              }]
          }
      ]
    },

    // Add some plots on the map
    plots: {
      'paris': {
        type: "circle",
        size: 18,
        value: [5000, 20],
        latitude: 48.86,
        longitude: 2.3444,
        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Paris"},
        text: {content: "Paris"}
      },
      'limoge': {
        type: "circle",
        size: 20,
        value: [50000, 20],
        latitude: 45.8188276,
        longitude: 1.1060351,
        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Limoge"},
        text: { content: "Limoge"}
      },
      'lyon': {
        type: "circle",
        size: 18,
        value: [150000, 20],
        latitude: 45.758888888889,
        longitude: 4.8413888888889,
        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Lyon"},
        text: {content: "Lyon"},
      },
      'rennes': {
        type: "circle",
        size: 20,
        value: [5000, 200],
        latitude: 48.114166666667,
        longitude: -1.6808333333333,
        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Rennes"},
        text: {content: "Rennes"},
      },
      "Moulins": {
        type: "circle",
        size: 20,
        value: [150000, 200],
        latitude: 46.86,
        longitude: 3.3444,
        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Moulins"},
        text: {content: "Moulins"}
      },
      "Bergerac": {
        type: "circle",
        size: 20,
        value: [5000, 2000],
        latitude: 44.8188276,
        longitude: 1.2060351,
        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Bergerac"},
        text: {content: "Bergerac"}
      },
      "Le Creusot": {
        type: "circle",
        size: 20,
        value: [5000, 2000],
        latitude: 46.658888888889,
        longitude: 4.8413888888889,
        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Le Creusot"},
        text: {content: "Le Creusot"},
      },
      "La Roche Sur-Yon": {
        type: "circle",
        value: 860000,
        size: 20,
        value: [150000, 2000],
        latitude: 47.114166666667,
        longitude: -1.6808333333333,
        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> La Roche Sur-Yon"},
        text: {content: "La Roche Sur-Yon"},
      }
    }
    });
  }
});