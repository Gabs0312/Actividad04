var wms_layers = [];

var format_Limite_Depto_HN_0 = new ol.format.GeoJSON();
var features_Limite_Depto_HN_0 = format_Limite_Depto_HN_0.readFeatures(json_Limite_Depto_HN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Depto_HN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Depto_HN_0.addFeatures(features_Limite_Depto_HN_0);
var lyr_Limite_Depto_HN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Depto_HN_0, 
                style: style_Limite_Depto_HN_0,
                interactive: true,
                title: '<img src="styles/legend/Limite_Depto_HN_0.png" /> Limite_Depto_HN'
            });
var format_Concesiones_Energia_2021_1 = new ol.format.GeoJSON();
var features_Concesiones_Energia_2021_1 = format_Concesiones_Energia_2021_1.readFeatures(json_Concesiones_Energia_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concesiones_Energia_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concesiones_Energia_2021_1.addFeatures(features_Concesiones_Energia_2021_1);
var lyr_Concesiones_Energia_2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Concesiones_Energia_2021_1, 
                style: style_Concesiones_Energia_2021_1,
                interactive: true,
                title: '<img src="styles/legend/Concesiones_Energia_2021_1.png" /> Concesiones_Energia_2021'
            });

lyr_Limite_Depto_HN_0.setVisible(true);lyr_Concesiones_Energia_2021_1.setVisible(true);
var layersList = [lyr_Limite_Depto_HN_0,lyr_Concesiones_Energia_2021_1];
lyr_Limite_Depto_HN_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD': 'COD', 'DEPTO': 'DEPTO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'DEP': 'DEP', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', });
lyr_Concesiones_Energia_2021_1.set('fieldAliases', {'fid': 'fid', 'Tipo_de_Pr': 'Tipo_de_Pr', 'Estado_201': 'Estado_201', 'Estado_202': 'Estado_202', 'Estado_2_1': 'Estado_2_1', 'Proyecto': 'Proyecto', 'Empresa': 'Empresa', 'Capacidad': 'Capacidad', 'Contrato': 'Contrato', 'Municipio': 'Municipio', 'Departamen': 'Departamen', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Limite_Depto_HN_0.set('fieldImages', {'OBJECTID': '', 'COD': '', 'DEPTO': '', 'Shape_Leng': '', 'Shape_Area': '', 'DEP': '', 'CODPAIS': '', 'Km2': '', 'Densidad': '', });
lyr_Concesiones_Energia_2021_1.set('fieldImages', {'fid': '', 'Tipo_de_Pr': '', 'Estado_201': '', 'Estado_202': '', 'Estado_2_1': '', 'Proyecto': '', 'Empresa': '', 'Capacidad': '', 'Contrato': '', 'Municipio': '', 'Departamen': '', 'Lat': '', 'Long': '', });
lyr_Limite_Depto_HN_0.set('fieldLabels', {'OBJECTID': 'inline label', 'COD': 'inline label', 'DEPTO': 'no label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'DEP': 'no label', 'CODPAIS': 'no label', 'Km2': 'no label', 'Densidad': 'inline label', });
lyr_Concesiones_Energia_2021_1.set('fieldLabels', {'fid': 'inline label', 'Tipo_de_Pr': 'inline label', 'Estado_201': 'inline label', 'Estado_202': 'inline label', 'Estado_2_1': 'inline label', 'Proyecto': 'inline label', 'Empresa': 'inline label', 'Capacidad': 'inline label', 'Contrato': 'inline label', 'Municipio': 'inline label', 'Departamen': 'inline label', 'Lat': 'inline label', 'Long': 'inline label', });
lyr_Concesiones_Energia_2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});