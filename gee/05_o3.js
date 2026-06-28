// India Boundary
var india = ee.FeatureCollection("FAO/GAUL/2015/level0")
                .filter(ee.Filter.eq('ADM0_NAME', 'India'));

Map.centerObject(india, 5);

// Sentinel-5P O3
var o3 = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_O3")
              .filterDate('2023-10-01', '2023-10-31');

var o3Mean = o3.mean();
var o3India = o3Mean.clip(india);

var o3Band = o3India.select('O3_column_number_density');

Map.addLayer(o3Band, {
  min: 0,
  max: 0.2,
  palette: ['blue','cyan','green','yellow','red']
}, 'O3');

Export.image.toDrive({
  image: o3Band,
  description: 'O3_India_Oct2023',
  folder: 'Surface_AQI_Project',
  fileNamePrefix: 'O3_India_Oct2023',
  region: india.geometry().bounds(),
  scale: 10000,
  maxPixels: 1e13
});