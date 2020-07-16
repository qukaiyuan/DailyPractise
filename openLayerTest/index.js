import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import KML from 'ol/format/KML';
import {Tile as TileLayer, Image as ImageLayer, Heatmap as HeatmapLayer} from 'ol/layer';
//import {OSM, ImageArcGISRest} from 'ol/source';
//import { fromLonLat } from 'ol/proj'
//import Feature from 'ol/Feature'
//import Point from 'ol/geom/Point'
import Stamen from 'ol/source/Stamen'
import VectorSource from 'ol/source/Vector'

//var url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer';

var vector = new HeatmapLayer({
  source:new VectorSource({
    url:'./data/2012_Earthquakes_Mag5.kml',
    format: new KML({
      extractStyles:false
    })
  }),
  blur:parseInt(15,10),
  radius:parseInt(5,10),
  weight: function(feature) {
    var name = feature.get('name')
    var magnitude = parseFloat(name.substr(2))
    return magnitude - 5
  }
})


var raster = new TileLayer({
  source: new Stamen({
    layer:'terrain'
  })
})

var layers = [raster, vector];
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 8
  })
});