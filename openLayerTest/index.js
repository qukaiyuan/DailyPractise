import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
//import XYZ from 'ol/source/XYZ';
// import ZoomSlider from 'ol/control/ZoomSlider'
// import ZoomToExtent from 'ol/control/ZoomToExtent'
import { fromLonLat } from 'ol/proj'


var map = new Map({
  view: new View({
    center: [12950000, 4860000],
    zoom: 8,
    minZoom:3,
    maxZoom:12
  }),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map'
});

var view = map.getView()
var zoom = view.getZoom()
var center = view.getCenter()
var rotation = view.getRotation()

document.getElementById('zoom-out').onclick = function() {
  var view = map.getView()
  var zoom = view.getZoom()

  view.setZoom(zoom - 1)
}

document.getElementById('zoom-in').onclick = function() {
  var view = map.getView()
  var zoom = view.getZoom()

  view.setZoom(zoom + 1)
}

document.getElementById('to').onclick = function() {
  var view = map.getView()
  var wh = fromLonLat([114.31667,30.51667])

  view.animate({
    easing: 'bounce',
    duration: 3000
  })

  view.setCenter(wh)
}

document.getElementById('reset').onclick = function() {
  view.setCenter(center)
  view.setZoom(zoom)
}