// India Boundary

var india = ee.FeatureCollection("FAO/GAUL/2015/level0")
                .filter(ee.Filter.eq('ADM0_NAME', 'India'));

Map.centerObject(india, 5);
Map.addLayer(india, {}, "India Boundary");


// Sentinel-5P HCHO Dataset
// For october 2023 only
var hcho = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_HCHO")
              .filterDate('2023-10-01', '2023-10-31');


// Create Monthly Mean

var hchoMean = hcho.mean();

// Clip to India

var hchoIndia = hchoMean.clip(india);

// Select HCHO Band

var hchoBand = hchoIndia.select(
  'tropospheric_HCHO_column_number_density'
);

// Print Information

print("Number of Images:", hcho.size());
print("First Image:", hcho.first());
print("Monthly Mean:", hchoMean);
print("India HCHO:", hchoIndia);

// Visualization

var hchoVis = {
  min: 0,
  max: 0.0003,
  palette: ['blue', 'cyan', 'green', 'yellow', 'red']
};

Map.addLayer(hchoBand, hchoVis, 'HCHO - October 2023');

// Statistics

var stats = hchoBand.reduceRegion({
  reducer: ee.Reducer.minMax(),
  geometry: india.geometry(),
  scale: 10000,
  maxPixels: 1e13
});

print("HCHO Min-Max", stats);