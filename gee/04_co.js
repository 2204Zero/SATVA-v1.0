// India Boundary
var india = ee.FeatureCollection("FAO/GAUL/2015/level0")
                .filter(ee.Filter.eq('ADM0_NAME', 'India'));

Map.centerObject(india, 5);

// Sentinel-5P CO
var co = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_CO")
              .filterDate('2023-10-01', '2023-10-31');

var coMean = co.mean();
var coIndia = coMean.clip(india);

var coBand = coIndia.select('CO_column_number_density');

Map.addLayer(coBand, {
  min: 0,
  max: 0.05,
  palette: ['blue','cyan','green','yellow','red']
}, 'CO');

Export.image.toDrive({
  image: coBand,
  description: 'CO_India_Oct2023',
  folder: 'Surface_AQI_Project',
  fileNamePrefix: 'CO_India_Oct2023',
  region: india.geometry().bounds(),
  scale: 10000,
  maxPixels: 1e13
});