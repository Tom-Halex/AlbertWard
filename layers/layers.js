var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Paths_1 = new ol.format.GeoJSON();
var features_Paths_1 = format_Paths_1.readFeatures(json_Paths_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paths_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paths_1.addFeatures(features_Paths_1);
var lyr_Paths_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paths_1, 
                style: style_Paths_1,
                popuplayertitle: 'Paths',
                interactive: false,
                title: '<img src="styles/legend/Paths_1.png" /> Paths'
            });
var format_Destinations_2 = new ol.format.GeoJSON();
var features_Destinations_2 = format_Destinations_2.readFeatures(json_Destinations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Destinations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Destinations_2.addFeatures(features_Destinations_2);
var lyr_Destinations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Destinations_2, 
                style: style_Destinations_2,
                popuplayertitle: 'Destinations',
                interactive: true,
                title: '<img src="styles/legend/Destinations_2.png" /> Destinations'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Paths_1.setVisible(true);lyr_Destinations_2.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Paths_1,lyr_Destinations_2];
lyr_Paths_1.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'To': 'To', 'From': 'From', 'type': 'type', });
lyr_Destinations_2.set('fieldAliases', {'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Arrival Da': 'Arrival Da', 'Departure': 'Departure', 'Images': 'Images', });
lyr_Paths_1.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', 'To': 'TextEdit', 'From': 'TextEdit', 'type': 'TextEdit', });
lyr_Destinations_2.set('fieldImages', {'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Arrival Da': 'TextEdit', 'Departure': 'TextEdit', 'Images': '', });
lyr_Paths_1.set('fieldLabels', {'begin': 'no label', 'end': 'no label', 'To': 'no label', 'From': 'no label', 'type': 'no label', });
lyr_Destinations_2.set('fieldLabels', {'Location': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Arrival Da': 'inline label - visible with data', 'Departure': 'inline label - visible with data', 'Images': 'header label - visible with data', });
lyr_Destinations_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});