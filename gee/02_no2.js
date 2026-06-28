// India Boundary
var india = ee.FeatureCollection("FAO/GAUL/2015/level0")
                .filter(ee.Filter.eq('ADM0_NAME', 'India'));

Map.centerObject(india, 5);

// Sentinel-5P NO2
var no2 = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_NO2")
              .filterDate('2023-10-01', '2023-10-31');

var no2Mean = no2.mean();
var no2India = no2Mean.clip(india);

var no2Band = no2India.select('tropospheric_NO2_column_number_density');

Map.addLayer(no2Band, {
  min: 0,
  max: 0.0002,
  palette: ['blue','cyan','green','yellow','red']
}, 'NO2');

Export.image.toDrive({
  image: no2Band,
  description: 'NO2_India_Oct2023',
  folder: 'Surface_AQI_Project',
  fileNamePrefix: 'NO2_India_Oct2023',
  region: india.geometry().bounds(),
  scale: 10000,
  maxPixels: 1e13
});