// India Boundary
var india = ee.FeatureCollection("FAO/GAUL/2015/level0")
                .filter(ee.Filter.eq('ADM0_NAME', 'India'));

Map.centerObject(india, 5);

// Sentinel-5P SO2
var so2 = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_SO2")
              .filterDate('2023-10-01', '2023-10-31');

var so2Mean = so2.mean();
var so2India = so2Mean.clip(india);

var so2Band = so2India.select('SO2_column_number_density');

Map.addLayer(so2Band, {
  min: 0,
  max: 0.0005,
  palette: ['blue','cyan','green','yellow','red']
}, 'SO2');

Export.image.toDrive({
  image: so2Band,
  description: 'SO2_India_Oct2023',
  folder: 'Surface_AQI_Project',
  fileNamePrefix: 'SO2_India_Oct2023',
  region: india.geometry().bounds(),
  scale: 10000,
  maxPixels: 1e13
});