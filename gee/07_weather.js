// ===============================
// India Boundary
// ===============================
var india = ee.FeatureCollection("FAO/GAUL/2015/level0")
                .filter(ee.Filter.eq('ADM0_NAME', 'India'));

Map.centerObject(india, 5);
Map.addLayer(india, {}, "India Boundary");


// ===============================
// ERA5 HOURLY Weather Dataset
// ===============================
var weather = ee.ImageCollection("ECMWF/ERA5/HOURLY")
                 .filterDate('2023-10-01', '2023-10-31');


// ===============================
// Check Dataset
// ===============================
print("Number of Images:", weather.size());
print("First Image:", weather.first());


// ===============================
// Monthly Mean
// ===============================
var weatherMean = weather.mean();


// ===============================
// Clip to India
// ===============================
var weatherIndia = weatherMean.clip(india);


// ===============================
// Select Temperature Band
// ===============================
var temp = weatherIndia.select('temperature_2m');


// ===============================
// Visualization
// ===============================
var tempVis = {
  min: 280,
  max: 320,
  palette: [
    '0000FF',
    '00FFFF',
    '00FF00',
    'FFFF00',
    'FF0000'
  ]
};

Map.addLayer(temp, tempVis, 'ERA5 Temperature');


// ===============================
// Export
// ===============================
Export.image.toDrive({
  image: temp,
  description: 'ERA5_Temperature_India_Oct2023',
  folder: 'Surface_AQI_Project',
  fileNamePrefix: 'ERA5_Temperature_India_Oct2023',
  region: india.geometry().bounds(),
  scale: 10000,
  maxPixels: 1e13
});