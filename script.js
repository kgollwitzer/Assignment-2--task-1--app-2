require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 4,
          center: [-98,37]
        });

var featureLayer_1 = new FeatureLayer({
  url: "https://services1.arcgis.com/ixD30sld6F8MQ7V5/arcgis/rest/services/MajorRiverBasins/FeatureServer"
});

map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services6.arcgis.com/Do88DoK2xjTUCXd1/arcgis/rest/services/OSM_Places_of_Worship_NA/FeatureServer"
});

map.add(featureLayer_2);

 });