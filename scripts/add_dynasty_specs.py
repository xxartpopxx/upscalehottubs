#!/usr/bin/env python3
"""Script to add fullSpecs to Dynasty Spa products in products.js"""

import re

# Read the file
with open('/app/frontend/src/data/products.js', 'r') as f:
    content = f.read()

# Define fullSpecs data for each product by ID
dynasty_specs = {
    'ds-pleasure-cove-ii': {
        'features_new': "['Illuminated Waterfalls', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'K.1000 Topside Control', 'LED Lights', 'Padded Headrests', 'Ozonator', 'RMAX Insulation', 'Lucite Acrylic', 'Maintenance Free Skirting']",
        'pumps_new': "'2 - 56 frame 7.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['80 stainless steel hydrotherapy jets', 'Reverse-pull neck jets', 'Illuminated waterfall jets', 'Adjustable and massage jets'],
      lightingSystem: 'LED top rail, waterfall, diverter, underwater, corner, and weir door lighting',
      waterFeature: 'Illuminated Waterfalls',
      controlSystem: 'K.1000 Touchscreen Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-pleasure-cove-iii': {
        'features_new': "['Illuminated Waterfalls', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'K.1000 Topside Control', 'LED Lights', 'Padded Headrests', 'Ozonator', 'RMAX Insulation', 'Lucite Acrylic', 'Maintenance Free Skirting']",
        'pumps_new': "'3 - 56 frame 6.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['80 stainless steel hydrotherapy jets', 'Reverse-pull neck jets', 'Illuminated waterfall jets', 'Adjustable and massage jets'],
      lightingSystem: 'LED top rail, waterfall, diverter, underwater, corner, and weir door lighting',
      waterFeature: 'Illuminated Waterfalls',
      controlSystem: 'K.1000 Touchscreen Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-coconut-bay-ii': {
        'features_new': "['Illuminated Waterfalls', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'K.1000 Topside Control', 'LED Lights', 'Padded Headrests', 'Ozonator', 'RMAX Insulation', 'Lucite Acrylic', 'Maintenance Free Skirting']",
        'pumps_new': "'2 - 56 frame 7.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['74 stainless steel hydrotherapy jets', 'Reverse-pull neck jets', 'Illuminated waterfall jets', 'Adjustable and massage jets'],
      lightingSystem: 'LED top rail, waterfall, diverter, underwater, corner, and weir door lighting',
      waterFeature: 'Illuminated Waterfalls',
      controlSystem: 'K.1000 Touchscreen Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-coconut-bay-iii': {
        'features_new': "['Illuminated Waterfalls', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'K.1000 Topside Control', 'LED Lights', 'Padded Headrests', 'Ozonator', 'RMAX Insulation', 'Lucite Acrylic', 'Maintenance Free Skirting']",
        'pumps_new': "'3 - 56 frame 6.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['74 stainless steel hydrotherapy jets', 'Reverse-pull neck jets', 'Illuminated waterfall jets', 'Adjustable and massage jets'],
      lightingSystem: 'LED top rail, waterfall, diverter, underwater, corner, and weir door lighting',
      waterFeature: 'Illuminated Waterfalls',
      controlSystem: 'K.1000 Touchscreen Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-caribbean-breeze': {
        'features_new': "['Illuminated Fountain Jets', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'K.1000 Topside Control', 'LED Lights', 'Padded Headrests', 'Ozonator', 'RMAX Insulation', 'Lucite Acrylic', 'Maintenance Free Skirting']",
        'pumps_new': "'2 - 56 frame 7.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['73 stainless steel hydrotherapy jets', 'Reverse-pull neck jets', 'Illuminated fountain jets', 'Adjustable and massage jets'],
      lightingSystem: 'LED top rail, fountain, waterfall, diverter, underwater, corner, and weir door lighting',
      waterFeature: 'Illuminated Fountain Jets & Waterfalls',
      controlSystem: 'K.1000 Touchscreen Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-nassau-royal': {
        'features_new': "['Illuminated Waterfall', 'Illuminated Diverters', 'Reverse Pull Neck Jets', 'Illuminated Weir Door', 'K.1000 Topside Control', 'LED Lights', 'Padded Headrests', 'Ozonator', 'RMAX Insulation', 'Lucite Acrylic', 'Maintenance Free Skirting']",
        'pumps_new': "'2 - 56 frame 7.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['73 stainless steel hydrotherapy jets', 'Reverse-pull neck jets', 'Illuminated waterfall jets', 'Adjustable and massage jets'],
      lightingSystem: 'LED top rail, fountain, waterfall, diverter, underwater, corner, and weir door lighting',
      waterFeature: 'Illuminated Waterfall',
      controlSystem: 'K.1000 Touchscreen Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-twin-palms': {
        'features_new': "['LED Top Rail Lighting', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'K.1000 Digital Topside', 'RMAX Insulation', '100 ft\\u00b2 Filtration', 'Maintenance Free Skirting']",
        'pumps_new': "'2 - 6.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['50 stainless steel hydrotherapy jets', 'Adjustable and massage jets'],
      lightingSystem: 'LED top rail and underwater lighting',
      controlSystem: 'K.1000 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-cabana-bay': {
        'features_new': "['Cascading Waterfall', 'K.506 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'RMAX Insulation', 'Maintenance Free Skirting', 'Air/Water Multi Jets']",
        'pumps_new': "'2 - 6.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['42 stainless steel hydrotherapy jets', 'Air/water multi jets', 'Orion and SS jets'],
      lightingSystem: 'LED underwater lighting',
      waterFeature: 'Cascading Waterfall',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 50 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-ocean-breeze': {
        'features_new': "['4 Water Features', 'K.506 Digital Topside', 'LED Fountain Jets', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'RMAX Insulation', 'Maintenance Free Skirting']",
        'pumps_new': "'2 - 6.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['42 stainless steel hydrotherapy jets', 'Air/water multi jets', 'Orion and SS jets', 'LED fountain jets'],
      lightingSystem: 'LED fountain jets and underwater lighting',
      waterFeature: '4 Water Features',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 50 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-bimini-110v': {
        'features_new': "['K.506 Digital Topside', 'LED Underwater Light', 'Padded Headrests', 'RMAX Insulation', 'Maintenance Free Skirting', 'Energy Efficient Heater', 'Ozonator', 'Insulated Cover']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['21 stainless steel hydrotherapy jets', 'Diverter controls', 'Pillowfall'],
      lightingSystem: 'LED underwater light',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer'
    },"""
    },
    'ds-bimini-220v': {
        'features_new': "['K.506 Digital Topside', 'LED Underwater Light', 'Padded Headrests', 'RMAX Insulation', 'Maintenance Free Skirting', 'Energy Efficient Heater', 'Ozonator', 'Insulated Cover']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['21 stainless steel hydrotherapy jets', 'Diverter controls', 'Pillowfall'],
      lightingSystem: 'LED underwater light',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer'
    },"""
    },
    'ds-treasure-cay-110v': {
        'features_new': "['K.506 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['45 stainless steel hydrotherapy jets', 'Adjustable and massage jets', 'Air/water multi jets'],
      lightingSystem: 'LED underwater lighting',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration, VGB-compliant suctions',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-treasure-cay-220v': {
        'features_new': "['K.506 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['45 stainless steel hydrotherapy jets', 'Adjustable and massage jets', 'Air/water multi jets'],
      lightingSystem: 'LED underwater lighting',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration, VGB-compliant suctions',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-sunset-cove': {
        'features_new': "['LED Fountain Jets', 'LED Underwater Lighting', 'K.506 Digital Topside', 'Padded Headrests', 'Easy Grip Built-in Handles', 'Ozonator', 'RMAX Insulation', 'Maintenance Free Skirting']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['33 stainless steel hydrotherapy jets', 'LED fountain jets'],
      lightingSystem: 'LED fountain jets and underwater lighting',
      waterFeature: 'LED Fountain Jets',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-tranquility-harbor': {
        'features_new': "['K.506 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'RMAX Insulation', 'Maintenance Free Skirting', 'Air/Water Multi Jets']",
        'pumps_new': "'2 - 6.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['48 stainless steel hydrotherapy jets', 'Air/water multi jets', 'Adjustable jets'],
      lightingSystem: 'LED underwater lighting',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-serenity-cove': {
        'features_new': "['Cascading Waterfall', 'K.506 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'RMAX Insulation', 'Maintenance Free Skirting']",
        'pumps_new': "'2 - 6.0 BHP'",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['42 stainless steel hydrotherapy jets', 'Air/water multi jets', 'Orion and SS jets'],
      lightingSystem: 'LED underwater lighting',
      waterFeature: 'Cascading Waterfall',
      controlSystem: 'K.506 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration, VGB-compliant suctions',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Black Confer, Gray Confer, Ash Elite, Coastal Gray Elite'
    },"""
    },
    'ds-seaside-110v': {
        'features_new': "['K.362 Digital Topside', 'Euro Fountains', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Insulated Cover', 'Black Scallop Jets']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['20 black scallop jets'],
      lightingSystem: 'LED underwater lighting',
      waterFeature: 'Euro Fountains',
      controlSystem: 'K.362 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble',
      cabinetColorOptions: 'Black Confer'
    },"""
    },
    'ds-seaside-220v': {
        'features_new': "['K.362 Digital Topside', 'Euro Fountains', 'LED Underwater Lighting', 'Padded Headrests', 'Ozonator System', 'Energy Efficient Heater', 'RMAX Insulation', 'Insulated Cover', 'Black Scallop Jets']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['20 black scallop jets'],
      lightingSystem: 'LED underwater lighting',
      waterFeature: 'Euro Fountains',
      controlSystem: 'K.362 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble',
      cabinetColorOptions: 'Black Confer'
    },"""
    },
    'ds-bay-bliss': {
        'features_new': "['K.362 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Energy Efficient Heater', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover', 'Ozonator']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['30 hydrotherapy jets'],
      lightingSystem: 'LED underwater lighting',
      controlSystem: 'K.362 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble',
      cabinetColorOptions: 'Black Confer'
    },"""
    },
    'ds-high-tide': {
        'features_new': "['K.362 Digital Topside', 'LED Underwater Lighting', 'Padded Headrests', 'Energy Efficient Heater', 'RMAX Insulation', 'Maintenance Free Skirting', 'Insulated Cover', 'Ozonator']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['30 hydrotherapy jets'],
      lightingSystem: 'LED underwater lighting',
      controlSystem: 'K.362 Digital Topside',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, 50 ft\\u00b2 filtration',
      waterCare: 'Ozonator system',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble',
      cabinetColorOptions: 'Black Confer'
    },"""
    },
    'ds-bahama-royale': {
        'features_new': "['K.1000 Topside Control', 'In.Touch App', 'LED In.Mix Lighting', 'LED Illuminated Jets', 'LED Illuminated Pillows', 'LED Illuminated Waterfall', 'LED Illuminated Diverters', 'LED Corner Lighting', 'Deep Oversized Seating', 'Lucite Acrylic', '2-Toned Elite Skirting', 'Ozonator', 'RMAX Insulation']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['83 stainless steel hydrotherapy jets', 'LED illuminated jets', 'Adjustable and massage jets'],
      lightingSystem: 'Full LED In.Mix lighting - illuminated jets, pillows, waterfall, diverters, corner, and underwater',
      waterFeature: 'LED Illuminated Waterfall',
      controlSystem: 'K.1000 Topside Control with In.Touch App',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Coastal Gray Elite, Ash Elite'
    },"""
    },
    'ds-imperial-royale': {
        'features_new': "['K.1000 Topside Control', 'In.Touch App', 'LED In.Mix Lighting', 'LED Illuminated Jets', 'LED Illuminated Pillows', 'LED Illuminated Waterfall', 'LED Illuminated Diverters', 'LED Corner Lighting', 'Deep Oversized Seating', 'Lucite Acrylic', '2-Toned Elite Skirting', 'Ozonator', 'RMAX Insulation']",
        'fullSpecs': """    fullSpecs: {
      jetsBreakdown: ['83 stainless steel hydrotherapy jets', 'LED illuminated jets', 'Adjustable and massage jets'],
      lightingSystem: 'Full LED In.Mix lighting - illuminated jets, pillows, waterfall, diverters, corner, and underwater',
      waterFeature: 'LED Illuminated Waterfall',
      controlSystem: 'K.1000 Topside Control with In.Touch App',
      heater: 'Energy-efficient heater',
      energyEfficiency: 'RMAX insulation, full wrap-around ABS bottom, VGB-compliant suctions',
      waterCare: 'Ozonator system, 100 ft\\u00b2 filtration',
      spaCover: 'Insulated cover included',
      shellColorOptions: 'Sterling Marble, Storm Clouds, Tuscan Sun, Smoky Mountain',
      cabinetColorOptions: 'Coastal Gray Elite, Ash Elite'
    },"""
    },
}

# For each product, find its definition and add fullSpecs after features line
for product_id, specs_data in dynasty_specs.items():
    # Find the product block - look for the id line
    id_pattern = f"id: '{product_id}',"
    id_pos = content.find(id_pattern)
    
    if id_pos == -1:
        print(f"WARNING: Could not find product {product_id}")
        continue
    
    # Check if this product already has fullSpecs
    # Find the next product id or end of array
    next_id_pos = content.find("id: 'ds-", id_pos + len(id_pattern))
    next_id_pos2 = content.find("id: 'vs-", id_pos + len(id_pattern))
    next_bracket = content.find("];", id_pos)
    
    end_pos = min(p for p in [next_id_pos, next_id_pos2, next_bracket] if p > 0)
    product_block = content[id_pos:end_pos]
    
    if 'fullSpecs' in product_block:
        print(f"SKIP: {product_id} already has fullSpecs")
        continue
    
    # Find the features line in this product block
    features_pos = content.find("    features:", id_pos)
    if features_pos == -1 or features_pos > end_pos:
        print(f"WARNING: Could not find features for {product_id}")
        continue
    
    # Find the end of the features line (next line)
    features_end = content.find("\n", features_pos)
    
    # Get the current features line
    features_line = content[features_pos:features_end]
    
    # Build new features line with updated features if provided
    if 'features_new' in specs_data:
        new_features_line = f"    features: {specs_data['features_new']},"
    else:
        new_features_line = features_line
    
    # Replace features line and add fullSpecs after it
    replacement = f"{new_features_line}\n{specs_data['fullSpecs']}"
    content = content[:features_pos] + replacement + content[features_end:]
    
    print(f"OK: Added fullSpecs to {product_id}")

# Write the file back
with open('/app/frontend/src/data/products.js', 'w') as f:
    f.write(content)

print("\nDone! All Dynasty products updated with fullSpecs.")
