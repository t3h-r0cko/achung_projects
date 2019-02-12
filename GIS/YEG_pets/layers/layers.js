var wms_layers = [];

        var lyr_CartoDBVoyagerLabelsUnder_0 = new ol.layer.Tile({
            'title': 'CartoDBVoyagerLabelsUnder_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://s.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
            })
        });var format_YEG_houses_1 = new ol.format.GeoJSON();
var features_YEG_houses_1 = format_YEG_houses_1.readFeatures(json_YEG_houses_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YEG_houses_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YEG_houses_1.addFeatures(features_YEG_houses_1);var lyr_YEG_houses_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YEG_houses_1, 
                style: style_YEG_houses_1,
    title: 'YEG_houses<br />\
    <img src="styles/legend/YEG_houses_1_0.png" /> 0<br />\
    <img src="styles/legend/YEG_houses_1_1.png" /> 1 - 249<br />\
    <img src="styles/legend/YEG_houses_1_2.png" />  250 - 653<br />\
    <img src="styles/legend/YEG_houses_1_3.png" />  654 - 1029<br />\
    <img src="styles/legend/YEG_houses_1_4.png" />  1030 - 1619<br />\
    <img src="styles/legend/YEG_houses_1_5.png" />  1620 - 3075<br />'
        });var format_YEG_apartments_2 = new ol.format.GeoJSON();
var features_YEG_apartments_2 = format_YEG_apartments_2.readFeatures(json_YEG_apartments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YEG_apartments_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YEG_apartments_2.addFeatures(features_YEG_apartments_2);var lyr_YEG_apartments_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YEG_apartments_2, 
                style: style_YEG_apartments_2,
    title: 'YEG_apartments<br />\
    <img src="styles/legend/YEG_apartments_2_0.png" /> 0<br />\
    <img src="styles/legend/YEG_apartments_2_1.png" /> 1 - 299<br />\
    <img src="styles/legend/YEG_apartments_2_2.png" /> 300 - 974<br />\
    <img src="styles/legend/YEG_apartments_2_3.png" />  975 - 2438<br />\
    <img src="styles/legend/YEG_apartments_2_4.png" />  2439 - 4480<br />\
    <img src="styles/legend/YEG_apartments_2_5.png" />  4481 - 13458<br />'
        });var format_YEG_mfg_homes_3 = new ol.format.GeoJSON();
var features_YEG_mfg_homes_3 = format_YEG_mfg_homes_3.readFeatures(json_YEG_mfg_homes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YEG_mfg_homes_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_YEG_mfg_homes_3.addFeatures(features_YEG_mfg_homes_3);var lyr_YEG_mfg_homes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YEG_mfg_homes_3, 
                style: style_YEG_mfg_homes_3,
    title: 'YEG_mfg_homes<br />\
    <img src="styles/legend/YEG_mfg_homes_3_0.png" /> 0<br />\
    <img src="styles/legend/YEG_mfg_homes_3_1.png" /> 1 - 4<br />\
    <img src="styles/legend/YEG_mfg_homes_3_2.png" />  5 - 118<br />\
    <img src="styles/legend/YEG_mfg_homes_3_3.png" />  119 - 862 <br />\
    <img src="styles/legend/YEG_mfg_homes_3_4.png" />  863 - 1074<br />'
        });var lyr_Catsheatmap15km_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cats heatmap 1.5 km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Catsheatmap15km_4.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12661405.187610, 7053340.452934, -12611209.921360, 7114203.718131]
                            })
                        });var format_TotalCatsbyNeighbourhood_5 = new ol.format.GeoJSON();
var features_TotalCatsbyNeighbourhood_5 = format_TotalCatsbyNeighbourhood_5.readFeatures(json_TotalCatsbyNeighbourhood_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalCatsbyNeighbourhood_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TotalCatsbyNeighbourhood_5.addFeatures(features_TotalCatsbyNeighbourhood_5);var lyr_TotalCatsbyNeighbourhood_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalCatsbyNeighbourhood_5, 
                style: style_TotalCatsbyNeighbourhood_5,
                title: '<img src="styles/legend/TotalCatsbyNeighbourhood_5.png" /> Total Cats by Neighbourhood'
            });var lyr_Largedogheatmap_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Large dog heatmap",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Largedogheatmap_6.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12661405.187610, 7053340.452934, -12611209.921360, 7114203.718131]
                            })
                        });var lyr_SmalldogHeatmap_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Small dog Heatmap",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SmalldogHeatmap_7.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12661405.187610, 7053340.452934, -12611209.921360, 7114203.718131]
                            })
                        });var lyr_DogsHeatmap15km_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Dogs Heatmap 1.5 km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DogsHeatmap15km_8.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12661405.187610, 7053340.452934, -12611209.921360, 7114203.718131]
                            })
                        });var format_TotalDogsbyNeighbourhood_9 = new ol.format.GeoJSON();
var features_TotalDogsbyNeighbourhood_9 = format_TotalDogsbyNeighbourhood_9.readFeatures(json_TotalDogsbyNeighbourhood_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalDogsbyNeighbourhood_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TotalDogsbyNeighbourhood_9.addFeatures(features_TotalDogsbyNeighbourhood_9);var lyr_TotalDogsbyNeighbourhood_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalDogsbyNeighbourhood_9, 
                style: style_TotalDogsbyNeighbourhood_9,
                title: '<img src="styles/legend/TotalDogsbyNeighbourhood_9.png" /> Total Dogs by Neighbourhood'
            });

lyr_CartoDBVoyagerLabelsUnder_0.setVisible(true);lyr_YEG_houses_1.setVisible(true);lyr_YEG_apartments_2.setVisible(false);lyr_YEG_mfg_homes_3.setVisible(false);lyr_Catsheatmap15km_4.setVisible(false);lyr_TotalCatsbyNeighbourhood_5.setVisible(false);lyr_Largedogheatmap_6.setVisible(false);lyr_SmalldogHeatmap_7.setVisible(false);lyr_DogsHeatmap15km_8.setVisible(true);lyr_TotalDogsbyNeighbourhood_9.setVisible(true);
var layersList = [lyr_CartoDBVoyagerLabelsUnder_0,lyr_YEG_houses_1,lyr_YEG_apartments_2,lyr_YEG_mfg_homes_3,lyr_Catsheatmap15km_4,lyr_TotalCatsbyNeighbourhood_5,lyr_Largedogheatmap_6,lyr_SmalldogHeatmap_7,lyr_DogsHeatmap15km_8,lyr_TotalDogsbyNeighbourhood_9];
lyr_YEG_houses_1.set('fieldAliases', {'name': 'Neighbourhood', 'house': 'Single&nbsp;Fam.&nbsp;Homes', });
lyr_YEG_apartments_2.set('fieldAliases', {'name': 'Neighbourhood', 'apt_tot': 'Apartments', });
lyr_YEG_mfg_homes_3.set('fieldAliases', {'name': 'Neighbourhood', 'mfg_home': 'Mfg.&nbsp;Homes', });
lyr_TotalCatsbyNeighbourhood_5.set('fieldAliases', {'name': 'Neighbourhood', 'tot_cats': 'Total&nbsp;Cats', 'area_km2': 'Area&nbsp;(km2)', });
lyr_TotalDogsbyNeighbourhood_9.set('fieldAliases', {'name': 'Neighbourhood', 'tot_dogs': 'Total&nbsp;Dogs', 'area_km2': 'Area&nbsp;(km2)', });
lyr_YEG_houses_1.set('fieldImages', {'name': '', 'house': '', });
lyr_YEG_apartments_2.set('fieldImages', {'name': '', 'apt_tot': '', });
lyr_YEG_mfg_homes_3.set('fieldImages', {'name': '', 'mfg_home': '', });
lyr_TotalCatsbyNeighbourhood_5.set('fieldImages', {'name': 'TextEdit', 'tot_cats': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_TotalDogsbyNeighbourhood_9.set('fieldImages', {'name': 'TextEdit', 'tot_dogs': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_YEG_houses_1.set('fieldLabels', {'name': 'header label', 'house': 'inline label', });
lyr_YEG_apartments_2.set('fieldLabels', {'name': 'header label', 'apt_tot': 'inline label', });
lyr_YEG_mfg_homes_3.set('fieldLabels', {'name': 'header label', 'mfg_home': 'inline label', });
lyr_TotalCatsbyNeighbourhood_5.set('fieldLabels', {'name': 'header label', 'tot_cats': 'inline label', 'area_km2': 'inline label', });
lyr_TotalDogsbyNeighbourhood_9.set('fieldLabels', {'name': 'header label', 'tot_dogs': 'inline label', 'area_km2': 'inline label', });
lyr_TotalDogsbyNeighbourhood_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});