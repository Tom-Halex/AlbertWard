var wms_layers = [];

var format_Paths_0 = new ol.format.GeoJSON();
var features_Paths_0 = format_Paths_0.readFeatures(json_Paths_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paths_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paths_0.addFeatures(features_Paths_0);
var lyr_Paths_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paths_0, 
                style: style_Paths_0,
                popuplayertitle: 'Paths',
                interactive: true,
                title: '<img src="styles/legend/Paths_0.png" /> Paths'
            });
var format_Destinations_1 = new ol.format.GeoJSON();
var features_Destinations_1 = format_Destinations_1.readFeatures(json_Destinations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Destinations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Destinations_1.addFeatures(features_Destinations_1);
var lyr_Destinations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Destinations_1, 
                style: style_Destinations_1,
                popuplayertitle: 'Destinations',
                interactive: true,
                title: '<img src="styles/legend/Destinations_1.png" /> Destinations'
            });

lyr_Paths_0.setVisible(true);lyr_Destinations_1.setVisible(true);
var layersList = [lyr_Paths_0,lyr_Destinations_1];
lyr_Paths_0.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'To': 'To', 'From': 'From', 'type': 'type', });
lyr_Destinations_1.set('fieldAliases', {'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Arrival Da': 'Arrival Da', 'Departure': 'Departure', 'Order': 'Order', });
lyr_Paths_0.set('fieldImages', {'begin': '', 'end': '', 'To': '', 'From': '', 'type': '', });
lyr_Destinations_1.set('fieldImages', {'Location': '', 'Latitude': '', 'Longitude': '', 'Arrival Da': '', 'Departure': '', 'Order': '', });
lyr_Paths_0.set('fieldLabels', {'begin': 'no label', 'end': 'no label', 'To': 'no label', 'From': 'no label', 'type': 'no label', });
lyr_Destinations_1.set('fieldLabels', {'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Arrival Da': 'no label', 'Departure': 'no label', 'Order': 'no label', });
lyr_Destinations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});