"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var flight_list_component_1 = require('./flight-list.component');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var flight_service_1 = require('./flight.service');
var appProviders = [
    flight_service_1.FlightService
];
var providers = [
    http_1.HTTP_PROVIDERS,
    appProviders
];
platform_browser_dynamic_1.bootstrap(flight_list_component_1.FlightListComponent, providers);
//# sourceMappingURL=main.js.map