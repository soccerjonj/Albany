(function () {
    const api = window.SubwayBuilderAPI;
    const CITY_CODE = 'ALB';

    if (!api) return;

    // 1. Register Albany
    api.registerCity({
        name: 'Albany',
        code: CITY_CODE,
        description: 'Navigate the capital of New York and connect the metro Capital Region',
        population: 360000,
        initialViewState: {
            zoom: 12,
            latitude: 42.684595,
            longitude: -73.766626,
            bearing: 0
        }
    });

    // 2. Register USA Tab
    api.cities.registerTab({
        id: 'usa',
        label: '🇺🇸 USA',
        cityCodes: [CITY_CODE]
    });
    // 3. Localhost tiles
    window.SubwayBuilderAPI.map.setTileURLOverride({
    	cityCode: 'ALB',
    	tilesUrl: 'http://127.0.0.1:8080/ALB/{z}/{x}/{y}.mvt',
    	foundationTilesUrl: 'http://127.0.0.1:8080/ALB/{z}/{x}/{y}.mvt',
    	maxZoom: 15
    });

    // 4. Data Files
    api.cities.setCityDataFiles(CITY_CODE, {
        buildingsIndex: '/data/ALB/buildings_index.json.gz',
        demandData: '/data/ALB/demand_data.json.gz',
        roads: '/data/ALB/roads.geojson.gz',
        runwaysTaxiways: '/data/ALB/runways_taxiways.geojson.gz',
	oceanDepth: '/data/ALB/ocean_depth_index.json.gz'
    });

    console.log('[Albany Mod] Map paths and tiles updated.');
})();