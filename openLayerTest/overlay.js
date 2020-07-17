import 'ol/ol.css'
import Map from 'ol/Map'
import OverLay from 'ol/Overlay'
import View from 'ol/View'
import { toStringHDMS } from 'ol/coordinate'
import TileLayer from 'ol/layer/Tile'
import { fromLonLat, toLonLat} from 'ol/proj'
import OSM from 'ol/source/OSM'


let layer = new TileLayer({
    source: new OSM()
})

let pos = fromLonLat([120.191525,30.46855]);

let map = new Map({
    layers:[layer],
    target:'map',
    view: new View({
        center:pos,
        zoom:11
    })
})

// add Hangzhou marker 
let marker = new OverLay({
    position:pos,
    positioning:'center-center',
    element:document.getElementById('marker'),
    stopEvent:false
})

map.addOverlay(marker)

// add Hangzhou label
let hangzhou = new OverLay({
    position:pos,
    element:document.getElementById('hangzhou')
})

map.addOverlay(hangzhou)

// add popup
let popup = new OverLay({
    element:document.getElementById('popup')
})

map.addOverlay(popup)

map.on('click',function(e) {
    let element = popup.getElement()

    let coordinate = e.coordinate

    let hdms = toStringHDMS(toLonLat(coordinate))

    document.getElementById('popup').innerHTML = 'this location is ' + hdms

    popup.setPosition(coordinate)

})