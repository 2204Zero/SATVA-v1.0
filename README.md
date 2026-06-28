# Surface AQI Prediction & HCHO Hotspot Analysis

## Overview

This repository contains the implementation of a satellite-driven geospatial analysis platform for predicting ground-level air quality and identifying formaldehyde (HCHO) hotspots across India.

The project aims to integrate multi-source satellite observations, meteorological datasets, and ground monitoring data to estimate surface pollutant concentrations, generate Air Quality Index (AQI) maps, and analyze potential pollution sources through HCHO hotspot detection.

This work is being developed as part of the Bharatiya Antariksh Hackathon (BAH) 2026 problem statement proposed by the Indian Space Research Organisation (ISRO).

---

## Problem Statement

Air quality monitoring in India is primarily dependent on ground-based monitoring stations. While these stations provide accurate observations, their spatial coverage is limited, leaving large geographical regions without continuous air quality information.

Satellite observations provide extensive spatial coverage but measure atmospheric column concentrations rather than pollutant concentrations at ground level.

The objective of this project is to bridge this gap by combining satellite observations with meteorological information and ground measurements to estimate surface-level pollution and investigate pollution source regions through HCHO hotspot analysis.

---

## Objectives

### Objective 1

Predict ground-based multi-pollutant concentrations using satellite observations and meteorological parameters.

The predicted concentrations will be validated using CPCB monitoring stations and used to generate spatial AQI maps.

### Objective 2

Identify HCHO hotspots across India and investigate their probable causes using satellite observations, fire datasets, and atmospheric parameters.

The analysis aims to support pollution source identification and understand atmospheric transport processes.

---

## Proposed System

<!-- Architecture Diagram -->

*Architecture diagram will be added here.*

---

## Workflow

```
Satellite Data
        +
Meteorological Data
        +
Ground Monitoring Data
        │
        ▼
Data Acquisition
        │
        ▼
Data Preprocessing
        │
        ▼
Data Fusion
        │
        ▼
Ground Pollutant Estimation
        │
        ▼
AQI Generation

-------------------------------------

HCHO Data
      +
Fire Data
      +
Weather Data
      │
      ▼
Hotspot Detection
      │
      ▼
Source Attribution
      │
      ▼
Spatial Analysis
```

---

# Data Sources

| Dataset | Purpose |
|----------|----------|
| Sentinel-5P NO₂ | Atmospheric NO₂ Column |
| Sentinel-5P SO₂ | Atmospheric SO₂ Column |
| Sentinel-5P CO | Atmospheric CO Column |
| Sentinel-5P O₃ | Atmospheric Ozone Column |
| Sentinel-5P HCHO | Formaldehyde Hotspot Analysis |
| INSAT-3D AOD | Aerosol Information |
| MODIS Fire | Biomass Burning Detection |
| VIIRS Fire | Fire Hotspot Validation |
| ERA5 / MERRA-2 | Meteorological Parameters |
| CPCB Monitoring Stations | Ground Truth Surface Pollutants |

---

# Repository Structure

```
surface-aqi-hcho/

docs/
gee/
src/
data/
notebooks/
outputs/
presentation/
```

---

# Development Roadmap

## Phase 1

- Dataset Identification
- Dataset Acquisition
- Google Earth Engine Exploration
- Satellite Data Visualization

---

## Phase 2

- Data Export
- Data Cleaning
- Spatial Alignment
- Temporal Alignment
- Dataset Fusion

---

## Phase 3

- Ground Pollutant Estimation
- AQI Generation
- Validation with CPCB
- Performance Evaluation

---

## Phase 4

- HCHO Hotspot Detection
- Fire-HCHO Analysis
- Source Attribution
- Spatial Visualization

---

## Phase 5

- Interactive Dashboard
- Report Generation
- Deployment

---

# Current Progress

- [x] Problem Statement Analysis
- [x] Dataset Identification
- [x] Dataset Availability Verification
- [ ] Google Earth Engine Scripts
- [ ] Dataset Export
- [ ] Data Fusion
- [ ] Model Development
- [ ] AQI Mapping
- [ ] HCHO Analysis
- [ ] Dashboard Development

---

# Results

<!-- AQI Maps -->

*AQI maps will be added here.*

---

<!-- HCHO Maps -->

*HCHO hotspot visualizations will be added here.*

---

<!-- Fire Analysis -->

*Fire hotspot analysis will be added here.*

---

<!-- Validation Graphs -->

*Model evaluation results will be added here.*

---

# Future Work

- High-resolution AQI prediction
- Near real-time monitoring
- Pollution trend forecasting
- Explainable AI for pollutant estimation
- Interactive geospatial dashboard

---

# Contributors

- Laksh Goyal
- Team Members

---

# License

This project is released under the MIT License.